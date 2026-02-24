import { Check, X } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  // Top Stats
  const stats = [
    { label: 'Total Users', value: '67.42K' },
    { label: '% Users Who Applied', value: '67.42%' },
    { label: '% Users Hired', value: '67.42%' },
    { label: '% MoM Total User Increase', value: '67.42%' },
    { label: '% Users with Resume', value: '67.42%' },
    { label: '% Users With Strong Resume', value: '67.42%' },
  ];

  // New Registered Users Data (Line Chart)
  const registeredUsersData = [
    { month: 'January', users: 10 },
    { month: 'February', users: 18 },
    { month: 'March', users: 25 },
    { month: 'April', users: 35 },
    { month: 'May', users: 38 },
  ];

  // Users by Gender Data
  const genderData = [
    { gender: 'Male', count: 350, percentage: 60 },
    { gender: 'Female', count: 233, percentage: 40 },
  ];

  // Users by Age Data
  const ageData = [
    { ageGroup: '18-24', count: 120, percentage: 20 },
    { ageGroup: '25-34', count: 180, percentage: 30 },
    { ageGroup: '35-44', count: 240, percentage: 40 },
    { ageGroup: '45-54', count: 150, percentage: 25 },
    { ageGroup: '55+', count: 90, percentage: 15 },
  ];

  // Users by Industry Data
  const industryData = [
    { industry: 'Construction', users: 45, slots: 20 },
    { industry: 'Manufacturing', users: 38, slots: 15 },
    { industry: 'Retail', users: 30, slots: 25 },
    { industry: 'Healthcare', users: 28, slots: 18 },
    { industry: 'Hospitality', users: 25, slots: 22 },
    { industry: 'Agriculture', users: 20, slots: 15 },
  ];

  // Location Data
  const locationData = [
    { location: 'Manila', users: '67k' },
    { location: 'Cebu', users: '42k' },
    { location: 'Batangas', users: '21k' },
    { location: 'Quezon', users: '15k' },
    { location: 'Iligan', users: '11k' },
    { location: 'Pampanga', users: '10k' },
    { location: 'Baguio', users: '9k' },
    { location: 'Negros', users: '9k' },
    { location: 'Laguna', users: '7k' },
    { location: 'Davao', users: '6k' },
  ];

  // Data Registered Table
  const registeredData = [
    { id: 1, date: '23 May 2020', success: 'Moreno', firstName: 'Edwin', company: 'Kennecott Co...', phone: '123-456-7890', email: 'name@company.ai/example.co...', gender: 'Company contact', received: '$5 Yes', checked: true },
    { id: 2, date: '22 May 2020', success: 'Marava', firstName: 'Louise Mae', company: 'First Ras Inc...', phone: '123-456-7890', email: 'name@company.ai/example.co...', gender: 'Company contact', received: '$5 Yes', checked: false },
    { id: 3, date: '18 May 2020', success: 'Morales', firstName: '', company: '', phone: '123-456-7890', email: 'name@company.ai/example.co...', gender: 'Company contact', received: '$5 Yes', checked: true },
    { id: 4, date: '15 May 2020', success: '', firstName: '', company: '', phone: '123-456-7890', email: 'name@company.ai/example.co...', gender: 'Company contact', received: '$5 Yes', checked: true },
    { id: 5, date: '25 May 2020', success: '', firstName: '', company: '', phone: '123-456-7890', email: 'name@company.ai/example.co...', gender: 'Company contact', received: '$5 Yes', checked: true },
  ];

  return (
    <div className="space-y-6">
      {/* Top Stats Cards - 6 cards in 2 rows */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm p-6 border-2 border-green-200">
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - New Registered Users */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">New Registered Users</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>By:</span>
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>Last 6 Months</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={registeredUsersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#FFA500" strokeWidth={2} dot={{ fill: '#FFA500', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Right Column - Users by Gender and Age */}
        <div className="space-y-6">
          {/* Users by Gender */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Users by Gender</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Male</span>
                  <span className="font-semibold">{genderData[0].count}</span>
                </div>
                <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: `${genderData[0].percentage}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Female</span>
                  <span className="font-semibold">{genderData[1].count}</span>
                </div>
                <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400" style={{ width: `${genderData[1].percentage}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Users by Age */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Users by Age</h3>
            <div className="space-y-2">
              {ageData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{item.ageGroup}</span>
                    <span className="font-semibold">{item.count}</span>
                  </div>
                  <div className="h-5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Industry Chart and Location Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Users By Industry */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Users By Industry</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={industryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="industry" tick={{ fontSize: 11 }} angle={-15} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#FFA500" name="Users" radius={[8, 8, 0, 0]} />
              <Bar dataKey="slots" fill="#FFD700" name="Slots" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Location Table */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Location</h3>
          <div className="overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="px-4 py-2 text-left text-sm font-semibold rounded-tl-lg">Location</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold rounded-tr-lg">Users</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {locationData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{item.location}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{item.users}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Data Registered Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
        <div className="px-6 py-4 bg-green-50 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Data Registered</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Date</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Success</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase">First name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Company</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Phone</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Email</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Gender</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Received</th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {registeredData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900 whitespace-nowrap">{row.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{row.success}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{row.firstName}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{row.company}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{row.phone}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">{row.email}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{row.gender}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{row.received}</td>
                  <td className="px-4 py-3 text-center">
                    {row.checked ? (
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
