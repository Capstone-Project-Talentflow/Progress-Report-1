import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Search, MapPin, DollarSign, X } from 'lucide-react';
import { useState } from 'react';
import svgPaths from '../imports/svg-3nnvnkmfcx';

export function JobPortal() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [searchType, setSearchType] = useState<'any' | 'exact'>('any');
  const [isSearching, setIsSearching] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const jobsData = [
    {
      id: 1,
      title: 'COOK',
      company: 'Premier Global Recruitment',
      location: 'Zagreb, Croatia',
      salary: 'PHP 55,000-60,000',
      vacancies: 73,
      posted: '19 days ago',
      type: 'landbased',
      placementFee: false,
      education: 'high-school',
      experience: false
    },
    {
      id: 2,
      title: 'ASSISTANT COOK',
      company: 'Premier Global Recruitment',
      location: 'Zagreb, Croatia',
      salary: 'PHP 50,000-55,000',
      vacancies: 23,
      posted: '3 days ago',
      type: 'landbased',
      placementFee: false,
      education: 'high-school',
      experience: false
    },
    {
      id: 3,
      title: 'ROOM ATTENDANT',
      company: 'Premier Global Recruitment',
      location: 'Zagreb, Croatia',
      salary: 'PHP 50,000-55,000',
      vacancies: 150,
      posted: '27 days ago',
      type: 'landbased',
      placementFee: false,
      education: 'high-school',
      experience: false
    },
    {
      id: 4,
      title: 'WAITER/WAITRESS',
      company: 'International Hospitality Services',
      location: 'Dubai, UAE',
      salary: 'PHP 48,000-52,000',
      vacancies: 85,
      posted: '5 days ago',
      type: 'landbased',
      placementFee: true,
      education: 'college',
      experience: true
    },
    {
      id: 5,
      title: 'HOTEL RECEPTIONIST',
      company: 'Global Hotels Group',
      location: 'Singapore',
      salary: 'PHP 60,000-70,000',
      vacancies: 42,
      posted: '12 days ago',
      type: 'seabased',
      placementFee: true,
      education: 'college',
      experience: true
    },
    {
      id: 6,
      title: 'HOUSEKEEPING SUPERVISOR',
      company: 'Luxury Resorts International',
      location: 'Maldives',
      salary: 'PHP 65,000-75,000',
      vacancies: 18,
      posted: '8 days ago',
      type: 'landbased',
      placementFee: false,
      education: 'high-school',
      experience: true
    }
  ];

  // Filter jobs based on search criteria
  const filterJobs = () => {
    if (!searchQuery && !locationQuery && activeFilters.length === 0) {
      return jobsData;
    }

    return jobsData.filter(job => {
      let matchesSearch = true;
      let matchesLocation = true;
      let matchesFilters = true;

      // Check job title/company match
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const titleLower = job.title.toLowerCase();
        const companyLower = job.company.toLowerCase();

        if (searchType === 'exact') {
          matchesSearch = titleLower.includes(searchLower) || companyLower.includes(searchLower);
        } else {
          // "Any of the words" - split search query and check if any word matches
          const searchWords = searchLower.split(' ').filter(word => word.length > 0);
          matchesSearch = searchWords.some(word => 
            titleLower.includes(word) || companyLower.includes(word)
          );
        }
      }

      // Check location match
      if (locationQuery) {
        const locationLower = locationQuery.toLowerCase();
        matchesLocation = job.location.toLowerCase().includes(locationLower);
      }

      // Check filters
      if (activeFilters.length > 0) {
        matchesFilters = activeFilters.every(filter => {
          switch (filter) {
            case 'landbased':
              return job.type === 'landbased';
            case 'no-placement-fee':
              return !job.placementFee;
            case 'high-school-graduate':
              return job.education === 'high-school';
            case 'no-work-experience':
              return !job.experience;
            default:
              return true;
          }
        });
      }

      return matchesSearch && matchesLocation && matchesFilters;
    });
  };

  const handleSearch = () => {
    setIsSearching(true);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setLocationQuery('');
    setIsSearching(false);
    setActiveFilters([]);
  };

  const filteredJobs = isSearching || searchQuery || locationQuery || activeFilters.length > 0 ? filterJobs() : jobsData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#17960b] via-[#158d0a] via-[29.808%] to-[#0d5e06] py-8 sm:py-10 md:py-12 lg:py-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-[1236px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-[768px]">
            {/* Heading */}
            <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[48px] font-bold leading-tight text-white mb-3 sm:mb-4 md:mb-6">
              Hiring the Right People at the Right Place at the Right Time.
            </h1>
            <p className="text-[15px] sm:text-base md:text-lg font-medium leading-relaxed text-white/95 mb-6 sm:mb-8 md:mb-12">
              Explore jobs, salaries, benefits, and different countries.
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] p-4 sm:p-5 md:p-6">
              {/* Search Input and Button */}
              <div className="flex flex-col gap-3 mb-4 md:mb-5">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g>
                        <path d="M17.5 17.5L13.8833 13.8833" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.pcddfd00} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Jobs by Keywords"
                    className="w-full pl-10 pr-3 py-3 sm:py-2.5 bg-[#f3f3f5] border-0 rounded-lg text-[14px] sm:text-[15px] leading-[normal] text-gray-900 placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#ffca1a]"
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5">
                    <MapPin className="block size-full text-[#99A1AF]" />
                  </div>
                  <input
                    type="text"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    placeholder="Search by Location"
                    className="w-full pl-10 pr-3 py-3 sm:py-2.5 bg-[#f3f3f5] border-0 rounded-lg text-[14px] sm:text-[15px] leading-[normal] text-gray-900 placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#ffca1a]"
                  />
                </div>
                <button 
                  onClick={handleSearch}
                  className="w-full bg-[#ffca1a] hover:bg-[#e6b617] text-[#101828] px-4 py-3 sm:py-2.5 rounded-lg text-[15px] sm:text-[14px] font-semibold sm:font-normal leading-[20px] transition-colors"
                >
                  Search
                </button>
              </div>

              {/* Radio Buttons */}
              <div className="flex gap-4 sm:gap-6 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="searchType"
                    value="any"
                    checked={searchType === 'any'}
                    onChange={(e) => setSearchType(e.target.value as 'any' | 'exact')}
                    className="w-[13px] h-[13px]"
                  />
                  <span className="text-[13px] sm:text-[14px] leading-[20px] text-[#364153]">Any of the Word</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="searchType"
                    value="exact"
                    checked={searchType === 'exact'}
                    onChange={(e) => setSearchType(e.target.value as 'any' | 'exact')}
                    className="w-[13px] h-[13px]"
                  />
                  <span className="text-[13px] sm:text-[14px] leading-[20px] text-[#364153]">Exact Word</span>
                </label>
              </div>

              {/* Filter Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                <button
                  className={`bg-[#ffca1a] border-[0.8px] border-transparent rounded-lg px-3 py-2 sm:px-2.5 sm:py-1.5 text-[13px] sm:text-[14px] leading-[20px] text-[#101828] flex items-center gap-1.5 sm:gap-2 hover:bg-[#e6b617] transition-colors touch-manipulation ${activeFilters.includes('landbased') ? 'bg-[#e6b617]' : ''}`}
                  onClick={() => {
                    if (activeFilters.includes('landbased')) {
                      setActiveFilters(activeFilters.filter(filter => filter !== 'landbased'));
                    } else {
                      setActiveFilters([...activeFilters, 'landbased']);
                    }
                  }}
                >
                  <div className="w-3 h-3 shrink-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <g>
                        <path d={svgPaths.p2e0e03b4} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p39c8900} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                  Landbased
                </button>
                <button
                  className={`bg-white border-[0.8px] border-white/50 rounded-lg px-3 py-2 sm:px-2.5 sm:py-1.5 text-[13px] sm:text-[14px] leading-[20px] text-[#364153] hover:bg-gray-50 transition-colors touch-manipulation ${activeFilters.includes('no-placement-fee') ? 'bg-[#ffca1a] text-[#101828] border-[#ffca1a]' : ''}`}
                  onClick={() => {
                    if (activeFilters.includes('no-placement-fee')) {
                      setActiveFilters(activeFilters.filter(filter => filter !== 'no-placement-fee'));
                    } else {
                      setActiveFilters([...activeFilters, 'no-placement-fee']);
                    }
                  }}
                >
                  No Placement Fee
                </button>
                <button
                  className={`bg-white border-[0.8px] border-white/50 rounded-lg px-3 py-2 sm:px-2.5 sm:py-1.5 text-[13px] sm:text-[14px] leading-[20px] text-[#364153] hover:bg-gray-50 transition-colors touch-manipulation ${activeFilters.includes('high-school-graduate') ? 'bg-[#ffca1a] text-[#101828] border-[#ffca1a]' : ''}`}
                  onClick={() => {
                    if (activeFilters.includes('high-school-graduate')) {
                      setActiveFilters(activeFilters.filter(filter => filter !== 'high-school-graduate'));
                    } else {
                      setActiveFilters([...activeFilters, 'high-school-graduate']);
                    }
                  }}
                >
                  High School Graduate
                </button>
                <button
                  className={`bg-white border-[0.8px] border-white/50 rounded-lg px-3 py-2 sm:px-2.5 sm:py-1.5 text-[13px] sm:text-[14px] leading-[20px] text-[#364153] hover:bg-gray-50 transition-colors touch-manipulation ${activeFilters.includes('no-work-experience') ? 'bg-[#ffca1a] text-[#101828] border-[#ffca1a]' : ''}`}
                  onClick={() => {
                    if (activeFilters.includes('no-work-experience')) {
                      setActiveFilters(activeFilters.filter(filter => filter !== 'no-work-experience'));
                    } else {
                      setActiveFilters([...activeFilters, 'no-work-experience']);
                    }
                  }}
                >
                  No Work Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Cards Section */}
      <div className="py-6 sm:py-8 md:py-12 bg-white">
        <div className="max-w-[1236px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Search Results Header */}
          {(searchQuery || locationQuery || isSearching || activeFilters.length > 0) && (
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  Search Results
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Found {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'}
                  {searchQuery && ` matching "${searchQuery}"`}
                  {locationQuery && ` in ${locationQuery}`}
                </p>
              </div>
              <button
                onClick={handleClearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm transition-colors self-start sm:self-auto"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </button>
            </div>
          )}

          {/* No Results Message */}
          {filteredJobs.length === 0 && (searchQuery || locationQuery || activeFilters.length > 0) && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Jobs Found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any jobs matching your search criteria.
                <br />
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={handleClearFilters}
                className="bg-[#17960b] hover:bg-[#17960b]/90 text-white px-6 py-2 rounded-lg transition-colors"
              >
                View All Jobs
              </button>
            </div>
          )}

          {/* Job Cards Grid */}
          {filteredJobs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white border-[0.8px] border-[#e5e7eb] rounded-[14px] p-[0.8px] hover:shadow-lg transition-shadow touch-manipulation"
                >
                  <div className="p-4 md:p-6">
                    {/* Job Title */}
                    <h3 className="text-[16px] font-normal leading-[24px] text-[#101828] mb-2">
                      {job.title}
                    </h3>

                    {/* Company */}
                    <p className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#4a5565] mb-3 md:mb-4 pb-3 md:pb-4 border-b border-[#f3f4f6]">
                      {job.company}
                    </p>

                    {/* Salary */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-4 shrink-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPaths.p2f7a47f0} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <span className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#364153]">
                        {job.salary}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-[#f3f4f6]">
                      <div className="w-4 h-4 shrink-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPaths.p9696100} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d={svgPaths.p30b23180} stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                        </svg>
                      </div>
                      <span className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#364153]">
                        {job.location}
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="pt-3 md:pt-4 flex items-center justify-between text-[14px] md:text-[16px]">
                      <span className="font-normal leading-[20px] md:leading-[24px] text-[#4a5565]">
                        {job.vacancies} Vacancies
                      </span>
                      <span className="font-normal leading-[20px] md:leading-[24px] text-[#6a7282]">
                        {job.posted}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}