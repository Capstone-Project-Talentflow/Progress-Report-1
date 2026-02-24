import React, { useState } from 'react';
import { Search, Building2, ChevronDown, ChevronRight, Briefcase, Users } from 'lucide-react';

interface JobOrder {
  id: number;
  jobOrderCode: string;
  position: string;
  numberOfApplicants: number;
  status: 'Open' | 'Closed' | 'On Hold';
  deadline: string;
}

interface Company {
  id: number;
  name: string;
  jobOrders: JobOrder[];
}

export default function Companies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCompanies, setExpandedCompanies] = useState<Set<number>>(new Set());
  const [expandedJobOrders, setExpandedJobOrders] = useState<Set<number>>(new Set());

  const companies: Company[] = [
    {
      id: 1,
      name: 'Tech Solutions Inc.',
      jobOrders: [
        {
          id: 1,
          jobOrderCode: 'JO-2026-001',
          position: 'Software Engineer',
          numberOfApplicants: 45,
          status: 'Open',
          deadline: '2026-02-15'
        },
        {
          id: 2,
          jobOrderCode: 'JO-2026-008',
          position: 'Senior Backend Developer',
          numberOfApplicants: 28,
          status: 'Open',
          deadline: '2026-02-20'
        },
        {
          id: 3,
          jobOrderCode: 'JO-2026-015',
          position: 'Frontend Developer',
          numberOfApplicants: 32,
          status: 'On Hold',
          deadline: '2026-03-01'
        }
      ]
    },
    {
      id: 2,
      name: 'Digital Innovations Ltd.',
      jobOrders: [
        {
          id: 4,
          jobOrderCode: 'JO-2026-002',
          position: 'Product Manager',
          numberOfApplicants: 32,
          status: 'Open',
          deadline: '2026-02-20'
        },
        {
          id: 5,
          jobOrderCode: 'JO-2026-009',
          position: 'Business Analyst',
          numberOfApplicants: 18,
          status: 'Open',
          deadline: '2026-02-25'
        }
      ]
    },
    {
      id: 3,
      name: 'Data Analytics Corp.',
      jobOrders: [
        {
          id: 6,
          jobOrderCode: 'JO-2026-003',
          position: 'Data Analyst',
          numberOfApplicants: 15,
          status: 'On Hold',
          deadline: '2026-02-25'
        }
      ]
    },
    {
      id: 4,
      name: 'Cloud Services Group',
      jobOrders: [
        {
          id: 7,
          jobOrderCode: 'JO-2026-004',
          position: 'DevOps Engineer',
          numberOfApplicants: 22,
          status: 'Open',
          deadline: '2026-02-22'
        },
        {
          id: 8,
          jobOrderCode: 'JO-2026-010',
          position: 'Cloud Architect',
          numberOfApplicants: 19,
          status: 'Open',
          deadline: '2026-03-05'
        },
        {
          id: 9,
          jobOrderCode: 'JO-2026-016',
          position: 'System Administrator',
          numberOfApplicants: 24,
          status: 'Open',
          deadline: '2026-02-28'
        }
      ]
    },
    {
      id: 5,
      name: 'Creative Design Studio',
      jobOrders: [
        {
          id: 10,
          jobOrderCode: 'JO-2026-005',
          position: 'UX Designer',
          numberOfApplicants: 18,
          status: 'Open',
          deadline: '2026-02-18'
        },
        {
          id: 11,
          jobOrderCode: 'JO-2026-011',
          position: 'UI Designer',
          numberOfApplicants: 21,
          status: 'Open',
          deadline: '2026-02-22'
        }
      ]
    },
    {
      id: 6,
      name: 'Marketing Pros LLC',
      jobOrders: [
        {
          id: 12,
          jobOrderCode: 'JO-2025-089',
          position: 'Marketing Manager',
          numberOfApplicants: 28,
          status: 'Closed',
          deadline: '2026-01-30'
        }
      ]
    },
    {
      id: 7,
      name: 'FinTech Solutions',
      jobOrders: [
        {
          id: 13,
          jobOrderCode: 'JO-2026-006',
          position: 'Financial Analyst',
          numberOfApplicants: 38,
          status: 'Open',
          deadline: '2026-02-28'
        },
        {
          id: 14,
          jobOrderCode: 'JO-2026-012',
          position: 'Accountant',
          numberOfApplicants: 25,
          status: 'Open',
          deadline: '2026-03-10'
        }
      ]
    },
    {
      id: 8,
      name: 'Global Enterprises',
      jobOrders: [
        {
          id: 15,
          jobOrderCode: 'JO-2026-007',
          position: 'Project Manager',
          numberOfApplicants: 52,
          status: 'Open',
          deadline: '2026-03-01'
        }
      ]
    }
  ];

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.jobOrders.some(jo => 
      jo.jobOrderCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jo.position.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const toggleCompany = (companyId: number) => {
    const newExpanded = new Set(expandedCompanies);
    if (newExpanded.has(companyId)) {
      newExpanded.delete(companyId);
    } else {
      newExpanded.add(companyId);
    }
    setExpandedCompanies(newExpanded);
  };

  const toggleJobOrder = (jobOrderId: number) => {
    const newExpanded = new Set(expandedJobOrders);
    if (newExpanded.has(jobOrderId)) {
      newExpanded.delete(jobOrderId);
    } else {
      newExpanded.add(jobOrderId);
    }
    setExpandedJobOrders(newExpanded);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800';
      case 'Closed':
        return 'bg-gray-100 text-gray-800';
      case 'On Hold':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const totalCompanies = companies.length;
  const totalJobOrders = companies.reduce((sum, company) => sum + company.jobOrders.length, 0);
  const totalApplicants = companies.reduce((sum, company) => 
    sum + company.jobOrders.reduce((jobSum, jo) => jobSum + jo.numberOfApplicants, 0), 0
  );

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600">
          <p className="text-xs text-gray-500 mb-1">Total Companies</p>
          <p className="text-2xl font-bold text-gray-900">{totalCompanies}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600">
          <p className="text-xs text-gray-500 mb-1">Total Job Orders</p>
          <p className="text-2xl font-bold text-gray-900">{totalJobOrders}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600">
          <p className="text-xs text-gray-500 mb-1">Total Applicants</p>
          <p className="text-2xl font-bold text-gray-900">{totalApplicants}</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search companies, job orders, or positions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
          />
        </div>
      </div>

      {/* Companies List */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
          {filteredCompanies.map((company) => (
            <div key={company.id}>
              {/* Company Row */}
              <div
                onClick={() => toggleCompany(company.id)}
                className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                    <p className="text-sm text-gray-500">
                      {company.jobOrders.length} Job Order{company.jobOrders.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs text-gray-500">Total Applicants</p>
                    <p className="text-lg font-bold text-blue-600">
                      {company.jobOrders.reduce((sum, jo) => sum + jo.numberOfApplicants, 0)}
                    </p>
                  </div>
                  {expandedCompanies.has(company.id) ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>

              {/* Expanded Job Orders */}
              {expandedCompanies.has(company.id) && (
                <div className="bg-gray-50 px-4 py-2">
                  <div className="ml-16 space-y-2">
                    {company.jobOrders.map((jobOrder) => (
                      <div key={jobOrder.id} className="bg-white rounded-lg border border-gray-200">
                        {/* Job Order Row */}
                        <div
                          onClick={() => toggleJobOrder(jobOrder.id)}
                          className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center space-x-3 flex-1">
                            <Briefcase className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-mono font-semibold text-gray-900">{jobOrder.jobOrderCode}</p>
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(jobOrder.status)}`}>
                                {jobOrder.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {expandedJobOrders.has(jobOrder.id) ? (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                        </div>

                        {/* Expanded Job Order Details */}
                        {expandedJobOrders.has(jobOrder.id) && (
                          <div className="px-3 pb-3 pt-0 border-t border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                              <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-600 mb-1">Position</p>
                                <p className="font-semibold text-gray-900">{jobOrder.position}</p>
                              </div>
                              <div className="bg-green-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-600 mb-1">Number of Applicants</p>
                                <div className="flex items-center space-x-2">
                                  <Users className="w-4 h-4 text-green-600" />
                                  <p className="font-bold text-green-600">{jobOrder.numberOfApplicants}</p>
                                </div>
                              </div>
                              <div className="bg-purple-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-600 mb-1">Deadline</p>
                                <p className="font-semibold text-gray-900">{jobOrder.deadline}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Info Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <Briefcase className="w-5 h-5 text-blue-600 mt-0.5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-blue-900 mb-1">About Job Orders</h4>
            <p className="text-sm text-blue-800">
              A Job Order refers to the hiring of a worker for piece work or intermittent job of short duration 
              not exceeding six months and pay is on a daily or hourly basis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
