import { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-65zdysylli';
import imgImageLandbase from 'figma:asset/636ded4fbbb48605dae08d3a89a37f53cf3273be.png';
import { Download, Plus, Trash2, Eye, EyeOff, Upload, X, FileText, Check, ChevronDown } from 'lucide-react';

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  portfolio: string;
}

interface WorkExperience {
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string;
}

interface Organization {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Skill {
  name: string;
  level: string;
}

export function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showDownloadDropdown, setShowDownloadDropdown] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: 'Naomi Cuerdo',
    email: 'naomi@example.com',
    phone: '09345234576',
    linkedin: 'linkedin.com/in/naomicuerdo',
    portfolio: 'www.yourportfolio.com',
  });

  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([
    {
      position: 'Senior Editor',
      company: 'Tech Media Corp',
      location: 'Singapore',
      startDate: 'Jan 2020',
      endDate: 'Present',
      current: true,
      description: 'Worked on multiple financial services-related engagements across Singapore, Thailand and Malaysia. Participated in the firm\'s Innovation Team. Co-lead for systems executive course manager position within ~2 years of joining the firm.'
    }
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      degree: 'Bachelor of Science in Business Management',
      school: 'Singapore Management University',
      location: 'Singapore',
      startDate: 'Aug 2016',
      endDate: 'Apr 2020',
      achievements: 'CGPA 3.7, Dean\'s Lister, High Distinction, Inaugural Medalist 2017, Excellence Scholarship 2015'
    }
  ]);

  const [organizations, setOrganizations] = useState<Organization[]>([
    {
      organization: 'Youth Leadership Council',
      role: 'Vice President',
      startDate: 'Jan 2019',
      endDate: 'Dec 2020',
      current: false,
      description: 'Led community outreach programs and managed a team of 15 volunteers'
    }
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    { name: 'Project Management', level: 'Expert' },
    { name: 'Data Analysis', level: 'Advanced' },
    { name: 'Microsoft Office Suite', level: 'Expert' }
  ]);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert('Resume submitted successfully to Naomi Cuerdo (09345234576)!');
  };

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, {
      position: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }]);
  };

  const removeWorkExperience = (index: number) => {
    setWorkExperiences(workExperiences.filter((_, i) => i !== index));
  };

  const updateWorkExperience = (index: number, field: keyof WorkExperience, value: string | boolean) => {
    const updated = [...workExperiences];
    updated[index] = { ...updated[index], [field]: value };
    setWorkExperiences(updated);
  };

  const addEducation = () => {
    setEducation([...education, {
      degree: '',
      school: '',
      location: '',
      startDate: '',
      endDate: '',
      achievements: ''
    }]);
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const updateEducation = (index: number, field: keyof Education, value: string) => {
    const updated = [...education];
    updated[index] = { ...updated[index], [field]: value };
    setEducation(updated);
  };

  const addOrganization = () => {
    setOrganizations([...organizations, {
      organization: '',
      role: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }]);
  };

  const removeOrganization = (index: number) => {
    setOrganizations(organizations.filter((_, i) => i !== index));
  };

  const updateOrganization = (index: number, field: keyof Organization, value: string | boolean) => {
    const updated = [...organizations];
    updated[index] = { ...updated[index], [field]: value };
    setOrganizations(updated);
  };

  const addSkill = () => {
    setSkills([...skills, { name: '', level: 'Beginner' }]);
  };

  const removeSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const updateSkill = (index: number, field: keyof Skill, value: string) => {
    const updated = [...skills];
    updated[index] = { ...updated[index], [field]: value };
    setSkills(updated);
  };

  const steps = [
    { number: 1, title: 'Personal\nInformation', icon: 'personal' },
    { number: 2, title: 'Professional', icon: 'professional' },
    { number: 3, title: 'Education', icon: 'education' },
    { number: 4, title: 'Organizational', icon: 'organizational' },
    { number: 5, title: 'Skills', icon: 'skills' },
  ];

  const ResumePreview = () => {
    // All resume content in a single flow
    return (
      <div className="space-y-6">
        {/* Continuous content that flows across multiple pages */}
        <div className="bg-white shadow-2xl mx-auto relative" style={{ width: '210mm', maxWidth: '100%' }}>
          <div className="p-8 sm:p-12 md:p-16">
            {/* Name */}
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-[#101828] uppercase tracking-wide mb-2">
                {personalInfo.fullName || 'YOUR NAME'}
              </h1>
              <div className="text-sm text-[#4a5565] space-y-0.5">
                {personalInfo.email && <p>{personalInfo.email}</p>}
                {personalInfo.phone && <p>{personalInfo.phone}</p>}
                {personalInfo.linkedin && <p>{personalInfo.linkedin}</p>}
                {personalInfo.portfolio && <p>{personalInfo.portfolio}</p>}
              </div>
            </div>

            {/* Work Experiences */}
            {workExperiences.length > 0 && workExperiences[0].position && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-[#101828] uppercase mb-3 pb-1.5 border-b-2 border-[#101828]">
                  Work Experience
                </h2>
                <div className="space-y-4">
                  {workExperiences.map((exp, index) => (
                    exp.position && (
                      <div key={index}>
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex-1">
                            <p className="text-base font-semibold text-[#101828]">{exp.position}</p>
                            <p className="text-sm text-[#4a5565]">
                              {exp.company}{exp.location && `, ${exp.location}`}
                            </p>
                          </div>
                          <p className="text-sm text-[#4a5565] whitespace-nowrap ml-4">
                            {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                          </p>
                        </div>
                        {exp.description && (
                          <p className="text-sm text-[#4a5565] mt-1 leading-relaxed">{exp.description}</p>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Page break indicator after work experience if content is long */}
            {(workExperiences.length > 2 || (education.length > 0 && education[0].degree)) && (
              <div className="border-t-2 border-dashed border-gray-300 my-8 relative">
                <span className="absolute -top-3 right-0 bg-white px-2 text-xs text-gray-400">Page Break</span>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && education[0].degree && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-[#101828] uppercase mb-3 pb-1.5 border-b-2 border-[#101828]">
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    edu.degree && (
                      <div key={index}>
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex-1">
                            <p className="text-base font-semibold text-[#101828]">{edu.degree}</p>
                            <p className="text-sm text-[#4a5565]">
                              {edu.school}{edu.location && `, ${edu.location}`}
                            </p>
                          </div>
                          <p className="text-sm text-[#4a5565] whitespace-nowrap ml-4">
                            {edu.startDate} - {edu.endDate}
                          </p>
                        </div>
                        {edu.achievements && (
                          <p className="text-sm text-[#4a5565] mt-1 leading-relaxed">{edu.achievements}</p>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Organizations */}
            {organizations.length > 0 && organizations[0].organization && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-[#101828] uppercase mb-3 pb-1.5 border-b-2 border-[#101828]">
                  Organizational Experience
                </h2>
                <div className="space-y-4">
                  {organizations.map((org, index) => (
                    org.organization && (
                      <div key={index}>
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex-1">
                            <p className="text-base font-semibold text-[#101828]">{org.role}</p>
                            <p className="text-sm text-[#4a5565]">{org.organization}</p>
                          </div>
                          <p className="text-sm text-[#4a5565] whitespace-nowrap ml-4">
                            {org.startDate} - {org.current ? 'Present' : org.endDate}
                          </p>
                        </div>
                        {org.description && (
                          <p className="text-sm text-[#4a5565] mt-1 leading-relaxed">{org.description}</p>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && skills[0].name && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-[#101828] uppercase mb-3 pb-1.5 border-b-2 border-[#101828]">
                  Skills
                </h2>
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    skill.name && (
                      <div key={index} className="flex items-center justify-between">
                        <p className="text-sm text-[#4a5565]">{skill.name}</p>
                        <p className="text-sm text-[#4a5565] font-medium">{skill.level}</p>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Step Indicator */}
        <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-6 md:mb-8 p-4 sm:p-6">
          {/* Mobile Step Indicator */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-[#101828]">Step {currentStep} of 5</p>
              <p className="text-xs text-[#4a5565]">{steps[currentStep - 1].title.replace('\n', ' ')}</p>
            </div>
            <div className="flex items-center gap-2">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    currentStep >= step.number ? 'bg-[#17960b]' : 'bg-[#e5e7eb]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Step Indicator */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-2">
                  <div className={`${
                    currentStep >= step.number ? 'bg-[#17960b]' : 'bg-[#e5e7eb]'
                  } rounded-full w-12 h-12 flex items-center justify-center`}>
                    <span className={`text-base font-bold ${
                      currentStep >= step.number ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.number}
                    </span>
                  </div>
                  <p className={`text-sm text-center whitespace-pre-wrap ${
                    currentStep === step.number ? 'text-[#101828] font-semibold' : 'text-[#6a7282]'
                  }`}>
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 mx-4 ${
                    currentStep > step.number ? 'bg-[#17960b]' : 'bg-[#e5e7eb]'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Preview Toggle Button */}
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="lg:hidden w-full mb-4 bg-[#17960b] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#148509] transition-colors"
        >
          {showPreview ? (
            <>
              <EyeOff className="w-5 h-5" />
              Hide Preview
            </>
          ) : (
            <>
              <Eye className="w-5 h-5" />
              Show Preview
            </>
          )}
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Panel - Form */}
          <div className={`${showPreview ? 'hidden lg:block' : 'block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8">
              {/* Form Content */}
              <div className="mb-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <>
                    <div className="mb-6 sm:mb-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                        <div className="flex-1">
                          <p className="text-lg sm:text-xl font-semibold text-[#101828] mb-2">Fill In Your Personal Information</p>
                          <p className="text-sm sm:text-base text-[#4a5565]">Help recruiters to get in touch with you.</p>
                        </div>
                        <button 
                          onClick={() => setShowUploadModal(true)}
                          className="bg-[#ffca1a] hover:bg-[#e6b617] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-center gap-2 text-sm font-semibold text-[#101828] transition-colors whitespace-nowrap self-start sm:self-auto"
                        >
                          <Upload className="w-4 h-4" />
                          UPLOAD CV
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-[#364153] mb-2">Name</label>
                        <input
                          type="text"
                          value={personalInfo.fullName}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                          className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                          placeholder="Naomi Cuerdo"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[#364153] mb-2">Phone Number (Mobile)</label>
                          <input
                            type="tel"
                            value={personalInfo.phone}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                            className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                            placeholder="09345234576"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#364153] mb-2">Email Address</label>
                          <input
                            type="email"
                            value={personalInfo.email}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                            className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                            placeholder="naomi@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#364153] mb-2">LinkedIn Profile URL</label>
                        <input
                          type="text"
                          value={personalInfo.linkedin}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
                          className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                          placeholder="linkedin.com/in/naomicuerdo"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#364153] mb-2">Portfolio/Website URL (Optional)</label>
                        <input
                          type="text"
                          value={personalInfo.portfolio}
                          onChange={(e) => setPersonalInfo({ ...personalInfo, portfolio: e.target.value })}
                          className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                          placeholder="www.yourportfolio.com"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2: Professional Experience */}
                {currentStep === 2 && (
                  <>
                    <div className="mb-6">
                      <p className="text-lg sm:text-xl font-semibold text-[#101828] mb-2">Work Experience</p>
                      <p className="text-sm sm:text-base text-[#4a5565]">Add your professional experience.</p>
                    </div>

                    <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                      {workExperiences.map((exp, index) => (
                        <div key={index} className="border border-[#e5e7eb] rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-base font-semibold text-[#101828]">Experience {index + 1}</p>
                            {workExperiences.length > 1 && (
                              <button
                                onClick={() => removeWorkExperience(index)}
                                className="text-red-600 hover:text-red-700 p-2"
                                aria-label="Remove experience"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-[#364153] mb-2">Position</label>
                              <input
                                type="text"
                                value={exp.position}
                                onChange={(e) => updateWorkExperience(index, 'position', e.target.value)}
                                className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                placeholder="e.g., Senior Editor"
                              />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-[#364153] mb-2">Company</label>
                                <input
                                  type="text"
                                  value={exp.company}
                                  onChange={(e) => updateWorkExperience(index, 'company', e.target.value)}
                                  className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                  placeholder="Company name"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-[#364153] mb-2">Location</label>
                                <input
                                  type="text"
                                  value={exp.location}
                                  onChange={(e) => updateWorkExperience(index, 'location', e.target.value)}
                                  className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                  placeholder="City, Country"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-[#364153] mb-2">Start Date</label>
                                <input
                                  type="text"
                                  value={exp.startDate}
                                  onChange={(e) => updateWorkExperience(index, 'startDate', e.target.value)}
                                  className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                  placeholder="Jan 2020"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-[#364153] mb-2">End Date</label>
                                <input
                                  type="text"
                                  value={exp.current ? 'Present' : exp.endDate}
                                  onChange={(e) => updateWorkExperience(index, 'endDate', e.target.value)}
                                  className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                  placeholder="Present"
                                  disabled={exp.current}
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={exp.current}
                                onChange={(e) => updateWorkExperience(index, 'current', e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 text-[#17960b] focus:ring-[#17960b]"
                              />
                              <label className="text-sm text-[#364153]">I currently work here</label>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-[#364153] mb-2">Description</label>
                              <textarea
                                value={exp.description}
                                onChange={(e) => updateWorkExperience(index, 'description', e.target.value)}
                                className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none resize-none focus:ring-2 focus:ring-[#17960b]"
                                rows={4}
                                placeholder="Describe your responsibilities and achievements"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={addWorkExperience}
                        className="w-full border-2 border-dashed border-[#17960b] rounded-lg py-3 text-[#17960b] font-semibold flex items-center justify-center gap-2 hover:bg-[#17960b]/5 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                        Add Another Experience
                      </button>
                    </div>
                  </>
                )}

                {/* Step 3: Education */}
                {currentStep === 3 && (
                  <>
                    <div className="mb-6">
                      <p className="text-lg sm:text-xl font-semibold text-[#101828] mb-2">Education Level</p>
                      <p className="text-sm sm:text-base text-[#4a5565]">Add your educational background.</p>
                    </div>

                    <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                      {education.map((edu, index) => (
                        <div key={index} className="border border-[#e5e7eb] rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-base font-semibold text-[#101828]">Education {index + 1}</p>
                            {education.length > 1 && (
                              <button
                                onClick={() => removeEducation(index)}
                                className="text-red-600 hover:text-red-700 p-2"
                                aria-label="Remove education"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-[#364153] mb-2">Degree</label>
                              <input
                                type="text"
                                value={edu.degree}
                                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                                className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                placeholder="e.g., Bachelor of Science in Business Management"
                              />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-[#364153] mb-2">School/University</label>
                                <input
                                  type="text"
                                  value={edu.school}
                                  onChange={(e) => updateEducation(index, 'school', e.target.value)}
                                  className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                  placeholder="University name"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-[#364153] mb-2">Location</label>
                                <input
                                  type="text"
                                  value={edu.location}
                                  onChange={(e) => updateEducation(index, 'location', e.target.value)}
                                  className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                  placeholder="City, Country"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-[#364153] mb-2">Start Date</label>
                                <input
                                  type="text"
                                  value={edu.startDate}
                                  onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                                  className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                  placeholder="Aug 2016"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-[#364153] mb-2">End Date</label>
                                <input
                                  type="text"
                                  value={edu.endDate}
                                  onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                                  className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                  placeholder="Apr 2020"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-[#364153] mb-2">Achievements/Honors</label>
                              <textarea
                                value={edu.achievements}
                                onChange={(e) => updateEducation(index, 'achievements', e.target.value)}
                                className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none resize-none focus:ring-2 focus:ring-[#17960b]"
                                rows={3}
                                placeholder="GPA, awards, honors, etc."
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={addEducation}
                        className="w-full border-2 border-dashed border-[#17960b] rounded-lg py-3 text-[#17960b] font-semibold flex items-center justify-center gap-2 hover:bg-[#17960b]/5 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                        Add Another Education
                      </button>
                    </div>
                  </>
                )}

                {/* Step 4: Organizational Experience */}
                {currentStep === 4 && (
                  <>
                    <div className="mb-6">
                      <p className="text-lg sm:text-xl font-semibold text-[#101828] mb-2">Organizational Experience</p>
                      <p className="text-sm sm:text-base text-[#4a5565]">Add your volunteer work and leadership roles.</p>
                    </div>

                    <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
                      {organizations.map((org, index) => (
                        <div key={index} className="border border-[#e5e7eb] rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-base font-semibold text-[#101828]">Organization {index + 1}</p>
                            {organizations.length > 1 && (
                              <button
                                onClick={() => removeOrganization(index)}
                                className="text-red-600 hover:text-red-700 p-2"
                                aria-label="Remove organization"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-[#364153] mb-2">Organization Name</label>
                              <input
                                type="text"
                                value={org.organization}
                                onChange={(e) => updateOrganization(index, 'organization', e.target.value)}
                                className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                placeholder="e.g., Youth Leadership Council"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-[#364153] mb-2">Role/Position</label>
                              <input
                                type="text"
                                value={org.role}
                                onChange={(e) => updateOrganization(index, 'role', e.target.value)}
                                className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                placeholder="e.g., Vice President"
                              />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-[#364153] mb-2">Start Date</label>
                                <input
                                  type="text"
                                  value={org.startDate}
                                  onChange={(e) => updateOrganization(index, 'startDate', e.target.value)}
                                  className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                  placeholder="Jan 2019"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-[#364153] mb-2">End Date</label>
                                <input
                                  type="text"
                                  value={org.current ? 'Present' : org.endDate}
                                  onChange={(e) => updateOrganization(index, 'endDate', e.target.value)}
                                  className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                                  placeholder="Dec 2020"
                                  disabled={org.current}
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={org.current}
                                onChange={(e) => updateOrganization(index, 'current', e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 text-[#17960b] focus:ring-[#17960b]"
                              />
                              <label className="text-sm text-[#364153]">I am currently involved</label>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-[#364153] mb-2">Description</label>
                              <textarea
                                value={org.description}
                                onChange={(e) => updateOrganization(index, 'description', e.target.value)}
                                className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none resize-none focus:ring-2 focus:ring-[#17960b]"
                                rows={3}
                                placeholder="Describe your contributions and achievements"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={addOrganization}
                        className="w-full border-2 border-dashed border-[#17960b] rounded-lg py-3 text-[#17960b] font-semibold flex items-center justify-center gap-2 hover:bg-[#17960b]/5 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                        Add Another Organization
                      </button>
                    </div>
                  </>
                )}

                {/* Step 5: Skills */}
                {currentStep === 5 && (
                  <>
                    <div className="mb-6">
                      <p className="text-lg sm:text-xl font-semibold text-[#101828] mb-2">Skills</p>
                      <p className="text-sm sm:text-base text-[#4a5565]">Add your professional skills and competencies.</p>
                    </div>

                    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                      {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                          <div className="flex-1">
                            <input
                              type="text"
                              value={skill.name}
                              onChange={(e) => updateSkill(index, 'name', e.target.value)}
                              className="w-full bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                              placeholder="e.g., Project Management"
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <select
                              value={skill.level}
                              onChange={(e) => updateSkill(index, 'level', e.target.value)}
                              className="flex-1 sm:w-40 bg-[#f3f3f5] rounded-lg px-3 py-2.5 text-sm text-gray-900 border-0 outline-none focus:ring-2 focus:ring-[#17960b]"
                            >
                              <option value="Beginner">Beginner</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Advanced">Advanced</option>
                              <option value="Expert">Expert</option>
                            </select>
                            {skills.length > 1 && (
                              <button
                                onClick={() => removeSkill(index)}
                                className="text-red-600 hover:text-red-700 p-2"
                                aria-label="Remove skill"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={addSkill}
                        className="w-full border-2 border-dashed border-[#17960b] rounded-lg py-3 text-[#17960b] font-semibold flex items-center justify-center gap-2 hover:bg-[#17960b]/5 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                        Add Another Skill
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 pt-6 border-t border-[#e5e7eb] mt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className={`px-6 sm:px-8 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-colors ${
                    currentStep === 1
                      ? 'bg-[#e5e7eb] text-[#99a1af] cursor-not-allowed'
                      : 'bg-[#e5e7eb] text-[#4a5565] hover:bg-[#d1d5dc]'
                  }`}
                >
                  Previous
                </button>
                {currentStep < 5 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 sm:px-8 py-2.5 bg-[#17960b] text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-[#148509] transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 sm:px-8 py-2.5 bg-[#17960b] text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-[#148509] transition-colors"
                  >
                    Submit Resume
                  </button>
                )}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-[#e5e7eb]">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm text-[#4a5565]">powered by</p>
                  <img src={imgImageLandbase} alt="Landbase" className="w-5 h-5" />
                  <p className="text-sm font-medium text-[#101828]">Landbase</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Resume Preview */}
          <div className={`${showPreview ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-20">
              {/* Download Header */}
              <div className="bg-white rounded-t-lg shadow-sm p-4 border-b border-[#e5e7eb]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#101828]">Resume Preview</p>
                  <div className="relative">
                    {/* Download Dropdown */}
                    <button 
                      onClick={() => setShowDownloadDropdown(!showDownloadDropdown)}
                      className="bg-[#17960b] text-white rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-semibold hover:bg-[#148509] transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      DOWNLOAD
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {showDownloadDropdown && (
                      <>
                        <div 
                          className="fixed inset-0 z-10" 
                          onClick={() => setShowDownloadDropdown(false)}
                        />
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                          <button
                            onClick={() => {
                              alert('Downloading as PDF...');
                              setShowDownloadDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-[#364153] transition-colors flex items-center gap-3"
                          >
                            <FileText className="w-4 h-4 text-[#17960b]" />
                            Download as PDF
                          </button>
                          <button
                            onClick={() => {
                              alert('Downloading as DOC...');
                              setShowDownloadDropdown(false);
                            }}
                            className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-[#364153] transition-colors flex items-center gap-3"
                          >
                            <FileText className="w-4 h-4 text-[#17960b]" />
                            Download as DOC
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Page Preview Container */}
              <div className="bg-gray-100 p-4 sm:p-6 rounded-b-lg shadow-sm">
                <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
                  <ResumePreview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload CV Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setShowUploadModal(false)}
          />
          
          {/* Modal */}
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 animate-in fade-in zoom-in duration-200">
              {/* Close Button */}
              <button
                onClick={() => setShowUploadModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-[#ffca1a] rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-7 h-7 text-[#101828]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#101828] mb-2">Upload Your CV</h2>
                <p className="text-sm text-[#4a5565]">
                  Upload your resume and we'll automatically fill in your information
                </p>
              </div>

              {/* Upload Area */}
              <div className="mb-6">
                <label 
                  htmlFor="cv-upload"
                  className="block w-full border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#17960b] transition-colors cursor-pointer group"
                >
                  <input 
                    id="cv-upload" 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        // Handle file upload here
                        alert('CV uploaded: ' + e.target.files[0].name);
                        setShowUploadModal(false);
                      }
                    }}
                  />
                  <FileText className="w-12 h-12 text-gray-400 group-hover:text-[#17960b] mx-auto mb-3 transition-colors" />
                  <p className="text-base font-medium text-[#101828] mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-[#4a5565]">
                    PDF, DOC, or DOCX (max. 10MB)
                  </p>
                </label>
              </div>

              {/* Supported Formats */}
              <div className="bg-[#f9fafb] rounded-lg p-4 mb-6">
                <p className="text-xs font-semibold text-[#364153] mb-2">Supported Formats:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-medium text-[#4a5565] border border-gray-200">
                    <Check className="w-3 h-3 text-[#17960b]" />
                    PDF
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-medium text-[#4a5565] border border-gray-200">
                    <Check className="w-3 h-3 text-[#17960b]" />
                    DOC
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-xs font-medium text-[#4a5565] border border-gray-200">
                    <Check className="w-3 h-3 text-[#17960b]" />
                    DOCX
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col-reverse sm:flex-row gap-3">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-[#364153] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => document.getElementById('cv-upload')?.click()}
                  className="flex-1 px-6 py-3 bg-[#17960b] text-white rounded-lg font-semibold hover:bg-[#148509] transition-colors flex items-center justify-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  Browse Files
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}