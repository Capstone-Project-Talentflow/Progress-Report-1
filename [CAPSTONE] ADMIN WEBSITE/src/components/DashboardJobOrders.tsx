import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardJobOrders() {
  // Top Stats
  const stats = [
    { label: 'Job Orders', value: '67.42K', color: 'border-purple-500' },
    { label: 'Incomplete Job Orders', value: '67.42%', color: 'border-gray-300' },
    { label: 'Ave Completion Rate of Open Job Orders', value: '67.42%', color: 'border-green-500' },
    { label: 'At-Risk Job Orders', value: '67.42%', color: 'border-gray-300' },
    { label: 'Active Deployees', value: '67.42%', color: 'border-gray-300' },
    { label: 'Open Positions', value: '67.42%', color: 'border-gray-300' },
    { label: 'Positions at Shortlist', value: '67.42%', color: 'border-gray-300' },
    { label: 'Current Applicants to Pending Ratio', value: '4:1', color: 'border-gray-300' },
  ];

  // Applicants and Available Positions Data
  const applicantsPositionsData = [
    { name: 'Jan', applicants: 35, positions: 25 },
    { name: 'Feb', applicants: 18, positions: 22 },
    { name: 'Mar', applicants: 28, positions: 18 },
    { name: 'Apr', applicants: 15, positions: 20 },
    { name: 'May', applicants: 25, positions: 15 },
    { name: 'Jun', applicants: 22, positions: 25 },
    { name: 'Jul', applicants: 18, positions: 12 },
    { name: 'Aug', applicants: 28, positions: 20 },
  ];

  // Company Unfilled Positions Data
  const companyData = [
    { company: 'Saudi 1', unfilled: 'n/a', percentage: '80%' },
    { company: 'Qatar 1', unfilled: 'n/a', percentage: '78%' },
    { company: 'Iraq 1', unfilled: 'n/a', percentage: '75%' },
    { company: 'Saudi 2', unfilled: '11k', percentage: '62%' },
    { company: 'Company 3', unfilled: '10k', percentage: '61%' },
    { company: 'Company 4', unfilled: 'n/a', percentage: '58%' },
    { company: 'Abu Dhabi', unfilled: '7k', percentage: '55%' },
    { company: 'Construction Co.', unfilled: '5k', percentage: '40%' },
    { company: 'Nursing Co.', unfilled: '3k', percentage: '25%' },
  ];

  // Distribution of Open Positions
  const openPositionsData = [
    { category: 'Electronics', value: 45 },
    { category: 'Healthcare', value: 35 },
    { category: 'Prof Services', value: 30 },
    { category: 'Business', value: 50 },
  ];

  // Job Orders per Age Range
  const ageRangeData = [
    { range: '0-60 days', value: 40 },
    { range: '61-90 days', value: 35 },
    { range: '91-120 days', value: 25 },
    { range: '121+ days', value: 45 },
  ];

  // Binned Age of Applicants
  const applicantAgeData = [
    { range: '18-24', value: 30 },
    { range: '25-29', value: 35 },
    { range: '30-34', value: 40 },
    { range: '35-39', value: 45 },
    { range: '40-44', value: 38 },
    { range: '45-49', value: 32 },
    { range: '50+', value: 50 },
  ];

  return (
    <div className="space-y-6">
      {/* Top Stats Cards - 8 cards in 2 rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`bg-white rounded-2xl shadow-sm p-6 border-2 ${stat.color}`}>
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Middle Section - Chart and Company Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left - Applicants and Available Positions Chart */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Applicants and Available Positions</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-gray-600">Applicants</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <span className="text-gray-600">Open Positions</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={applicantsPositionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="applicants" fill="#FFA500" radius={[8, 8, 0, 0]} />
              <Bar dataKey="positions" fill="#FFD700" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right - Company Table */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Company</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded font-semibold">
                Unfilled Positions
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded font-semibold">
                % Unfilled Positions
              </button>
            </div>
          </div>
          <div className="overflow-auto max-h-[280px]">
            <table className="w-full">
              <thead className="sticky top-0 bg-white">
                <tr className="border-b border-gray-200">
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Company</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">Unfilled Positions</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-600">% Unfilled</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {companyData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-3 py-3 text-sm text-gray-900">{item.company}</td>
                    <td className="px-3 py-3 text-sm text-gray-600">{item.unfilled}</td>
                    <td className="px-3 py-3 text-sm text-gray-900 font-semibold">{item.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Section - Three Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Distribution of Open Positions */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Distribution of Open Positions</h3>
          <div className="space-y-3">
            {openPositionsData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{item.category}</span>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
                <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Orders per Age Range of Job Orders */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Job Orders per Age Range of Job Orders</h3>
          <div className="space-y-3">
            {ageRangeData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{item.range}</span>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
                <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Binned Age of Applicants */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Binned Age of Applicants</h3>
          <div className="space-y-3">
            {applicantAgeData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{item.range}</span>
                  <span className="font-semibold text-gray-900">{item.value}</span>
                </div>
                <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
