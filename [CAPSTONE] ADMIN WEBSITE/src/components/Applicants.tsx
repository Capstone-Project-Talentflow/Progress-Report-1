import React, { useState } from 'react';
import { Search, Download, Filter, X } from 'lucide-react';

interface Applicant {
  id: number;
  name: string;
  jobOrder: string;
  position: string;
  resumeScore: number;
  status: 'applied' | 'AI-screened' | 'Shortlist' | 'Scheduled' | 'Accepted' | 'Rejected';
  meetingLink: string;
  rejectionReason?: string;
  appliedDate: string;
}

export default function Applicants() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const [applicants, setApplicants] = useState<Applicant[]>([
    {
      id: 1,
      name: 'John Doe',
      jobOrder: 'JO-2026-001',
      position: 'Software Engineer',
      resumeScore: 85,
      status: 'Shortlist',
      meetingLink: 'https://meet.example.com/abc123',
      appliedDate: '2026-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      jobOrder: 'JO-2026-002',
      position: 'Product Manager',
      resumeScore: 92,
      status: 'Scheduled',
      meetingLink: 'https://meet.example.com/xyz789',
      appliedDate: '2026-01-14'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      jobOrder: 'JO-2026-001',
      position: 'Software Engineer',
      resumeScore: 78,
      status: 'AI-screened',
      meetingLink: '',
      appliedDate: '2026-01-13'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      jobOrder: 'JO-2026-003',
      position: 'Data Analyst',
      resumeScore: 65,
      status: 'Rejected',
      meetingLink: '',
      rejectionReason: 'Does not meet minimum experience requirements (5+ years required)',
      appliedDate: '2026-01-12'
    },
    {
      id: 5,
      name: 'David Brown',
      jobOrder: 'JO-2026-004',
      position: 'DevOps Engineer',
      resumeScore: 88,
      status: 'Accepted',
      meetingLink: 'https://meet.example.com/def456',
      appliedDate: '2026-01-11'
    },
    {
      id: 6,
      name: 'Emily Davis',
      jobOrder: 'JO-2026-002',
      position: 'Product Manager',
      resumeScore: 70,
      status: 'applied',
      meetingLink: '',
      appliedDate: '2026-01-10'
    },
    {
      id: 7,
      name: 'Robert Miller',
      jobOrder: 'JO-2026-005',
      position: 'UX Designer',
      resumeScore: 55,
      status: 'Rejected',
      meetingLink: '',
      rejectionReason: 'Portfolio does not demonstrate required design skills for enterprise applications',
      appliedDate: '2026-01-09'
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      jobOrder: 'JO-2026-001',
      position: 'Software Engineer',
      resumeScore: 95,
      status: 'Scheduled',
      meetingLink: 'https://meet.example.com/ghi789',
      appliedDate: '2026-01-08'
    },
  ]);

  const handleStatusChange = (id: number, newStatus: Applicant['status']) => {
    setApplicants(prev => prev.map(applicant => 
      applicant.id === id ? { ...applicant, status: newStatus } : applicant
    ));
  };

  const filteredApplicants = applicants.filter(applicant => {
    const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         applicant.jobOrder.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || applicant.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied':
        return 'bg-gray-100 text-gray-800';
      case 'AI-screened':
        return 'bg-blue-100 text-blue-800';
      case 'Shortlist':
        return 'bg-purple-100 text-purple-800';
      case 'Scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 font-bold';
    if (score >= 60) return 'text-yellow-600 font-bold';
    return 'text-red-600 font-bold';
  };

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {['applied', 'AI-screened', 'Shortlist', 'Scheduled', 'Accepted', 'Rejected'].map((status) => {
          const count = applicants.filter(a => a.status === status).length;
          return (
            <div key={status} className="bg-white rounded-lg shadow-md p-4">
              <p className="text-xs text-gray-500 mb-1">{status}</p>
              <p className="text-2xl font-bold text-gray-900">{count}</p>
            </div>
          );
        })}
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, position, or job order..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
          >
            <option>All</option>
            <option>applied</option>
            <option>AI-screened</option>
            <option>Shortlist</option>
            <option>Scheduled</option>
            <option>Accepted</option>
            <option>Rejected</option>
          </select>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
          <Download className="w-5 h-5" />
          <span>Export</span>
        </button>
      </div>

      {/* Applicants Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-green-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Resume Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applied Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rejection Reason
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplicants.map((applicant) => (
                <tr key={applicant.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600 font-semibold">
                          {applicant.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-gray-900">{applicant.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-mono">{applicant.jobOrder}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{applicant.position}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm ${getScoreColor(applicant.resumeScore)}`}>
                      {applicant.resumeScore}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={applicant.status}
                      onChange={(e) => handleStatusChange(applicant.id, e.target.value as Applicant['status'])}
                      className={`px-3 py-1 text-xs font-semibold rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-green-500 ${getStatusColor(applicant.status)}`}
                    >
                      <option value="applied">applied</option>
                      <option value="AI-screened">AI-screened</option>
                      <option value="Shortlist">Shortlist</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {applicant.appliedDate}
                  </td>
                  <td className="px-6 py-4">
                    {applicant.status === 'Rejected' && applicant.rejectionReason ? (
                      <div className="text-sm text-red-800 max-w-xs">
                        {applicant.rejectionReason}
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">—</span>
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