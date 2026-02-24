import { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Shield, 
  FileText,
  Briefcase,
  Building2,
  Settings,
  LogOut,
  Moon,
  Sun,
  Menu,
  X,
  TrendingUp
} from 'lucide-react';
import logoImage from 'figma:asset/59d793a5637be5743b4000eaed07893258073d54.png';
import Dashboard from './Dashboard';
import DashboardJobOrders from './DashboardJobOrders';
import Analytics from './Analytics';
import ManageUsers from './ManageUsers';
import ManageRoles from './ManageRoles';
import JobOrders from './JobOrders';
import Companies from './Companies';
import General from './General';

interface DashboardLayoutProps {
  onLogout: () => void;
}

type MenuItem = 'general' | 'dashboard' | 'dashboardjoborders' | 'analytics' | 'users' | 'roles' | 'joborders' | 'companies';

export default function DashboardLayout({ onLogout }: DashboardLayoutProps) {
  const [activeMenu, setActiveMenu] = useState<MenuItem>('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'general' as MenuItem, label: 'General', icon: Settings },
    { id: 'dashboard' as MenuItem, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'dashboardjoborders' as MenuItem, label: 'Dashboard - Job Orders', icon: TrendingUp },
    { id: 'analytics' as MenuItem, label: 'Analytics', icon: BarChart3 },
    { id: 'users' as MenuItem, label: 'Manage Users', icon: Users },
    { id: 'roles' as MenuItem, label: 'Manage Roles', icon: Shield },
    { id: 'joborders' as MenuItem, label: 'Job Orders', icon: Briefcase },
    { id: 'companies' as MenuItem, label: 'Companies', icon: Building2 },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'general':
        return <General />;
      case 'dashboard':
        return <Dashboard />;
      case 'dashboardjoborders':
        return <DashboardJobOrders />;
      case 'analytics':
        return <Analytics />;
      case 'users':
        return <ManageUsers />;
      case 'roles':
        return <ManageRoles />;
      case 'joborders':
        return <JobOrders />;
      case 'companies':
        return <Companies />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full ${
          sidebarOpen ? 'w-64' : 'w-0'
        } transition-all duration-300 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-r overflow-hidden z-20`}
      >
        <div className="p-6">
          <img src={logoImage} alt="Logo" className="w-16 h-16 mb-6" />
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMenu(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeMenu === item.id
                      ? 'bg-green-600 text-white'
                      : darkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {/* Header */}
        <header
          className={`sticky top-0 z-10 ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } border-b`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-2 rounded-lg ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                {sidebarOpen ? (
                  <X className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                )}
              </button>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {menuItems.find((item) => item.id === activeMenu)?.label}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}