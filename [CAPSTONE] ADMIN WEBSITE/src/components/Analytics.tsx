import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export default function Analytics() {
  const applicantData = [
    { month: 'Jan', applied: 120, accepted: 45, rejected: 30, pending: 45 },
    { month: 'Feb', applied: 150, accepted: 60, rejected: 40, pending: 50 },
    { month: 'Mar', applied: 180, accepted: 70, rejected: 50, pending: 60 },
    { month: 'Apr', applied: 200, accepted: 85, rejected: 55, pending: 60 },
    { month: 'May', applied: 170, accepted: 75, rejected: 45, pending: 50 },
    { month: 'Jun', applied: 190, accepted: 80, rejected: 50, pending: 60 },
  ];

  const statusData = [
    { name: 'Applied', value: 450 },
    { name: 'Shortlisted', value: 280 },
    { name: 'Accepted', value: 180 },
    { name: 'Rejected', value: 120 },
  ];

  const COLORS = ['#3B82F6', '#EAB308', '#22C55E', '#EF4444'];

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-gray-500 text-sm mb-2">Total Applications</h3>
          <p className="text-3xl font-bold text-gray-900">1,030</p>
          <p className="text-green-600 text-sm mt-2">↑ 12% from last month</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-gray-500 text-sm mb-2">Acceptance Rate</h3>
          <p className="text-3xl font-bold text-gray-900">17.5%</p>
          <p className="text-green-600 text-sm mt-2">↑ 2.3% from last month</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-gray-500 text-sm mb-2">Active Job Orders</h3>
          <p className="text-3xl font-bold text-gray-900">45</p>
          <p className="text-red-600 text-sm mt-2">↓ 3 from last month</p>
        </div>
      </div>

      {/* Applicant Trends */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Applicant Trends</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={applicantData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="applied" fill="#3B82F6" name="Applied" />
            <Bar dataKey="accepted" fill="#22C55E" name="Accepted" />
            <Bar dataKey="rejected" fill="#EF4444" name="Rejected" />
            <Bar dataKey="pending" fill="#EAB308" name="Pending" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Distribution */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Status Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Acceptance Rate Trend */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Acceptance Rate Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={applicantData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="accepted" stroke="#22C55E" strokeWidth={3} name="Accepted" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
