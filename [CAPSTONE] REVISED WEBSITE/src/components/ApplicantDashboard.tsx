import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  CheckCircle, 
  AlertCircle, 
  Briefcase, 
  Award,
  FileText,
  Target,
  Building2,
  ArrowRight,
  UserCircle
} from 'lucide-react';
import logo from 'figma:asset/636ded4fbbb48605dae08d3a89a37f53cf3273be.png';

interface SkillAssessment {
  name: string;
  score: number;
  status: 'excellent' | 'good' | 'needs-improvement';
  recommendation: string;
}

interface CompanyRecommendation {
  name: string;
  matchScore: number;
  industry: string;
  openPositions: number;
  salaryRange: string;
  location: string;
  reason: string;
}

interface ApplicantDashboardProps {
  isLoggedIn?: boolean;
  onSignUpRequired?: () => void;
  onBackToHome?: () => void;
}

export function ApplicantDashboard({ isLoggedIn = false, onSignUpRequired, onBackToHome }: ApplicantDashboardProps) {
  const applicantName = "John";
  const overallScore = 78;
  const applicationStatus = "Under Review";

  const skillsAssessment: SkillAssessment[] = [
    {
      name: "Communication Skills",
      score: 85,
      status: 'excellent',
      recommendation: "Strong communication skills demonstrated in resume"
    },
    {
      name: "Technical Skills",
      score: 72,
      status: 'good',
      recommendation: "Consider adding certifications to strengthen this area"
    },
    {
      name: "Work Experience",
      score: 65,
      status: 'needs-improvement',
      recommendation: "Highlight specific achievements and quantify results"
    },
    {
      name: "Education",
      score: 90,
      status: 'excellent',
      recommendation: "Well-documented educational background"
    },
    {
      name: "Language Proficiency",
      score: 88,
      status: 'excellent',
      recommendation: "Excellent multilingual capabilities"
    },
    {
      name: "Certifications",
      score: 60,
      status: 'needs-improvement',
      recommendation: "Add industry-specific certifications to stand out"
    }
  ];

  const areasForImprovement = [
    {
      area: "Work Experience Details",
      impact: "High",
      suggestion: "Add specific metrics and achievements (e.g., 'Increased sales by 30%' instead of 'Responsible for sales')"
    },
    {
      area: "Professional Certifications",
      impact: "Medium",
      suggestion: "Consider obtaining relevant certifications such as TESDA NC II or industry-specific credentials"
    },
    {
      area: "Keywords Optimization",
      impact: "Medium",
      suggestion: "Include industry-specific keywords that match job descriptions"
    },
    {
      area: "References Section",
      impact: "Low",
      suggestion: "Add professional references with contact information"
    }
  ];

  const recommendedCompanies: CompanyRecommendation[] = [
    {
      name: "Global Tech Solutions",
      matchScore: 92,
      industry: "Technology",
      openPositions: 12,
      salaryRange: "PHP 45,000-65,000",
      location: "Singapore",
      reason: "Your technical skills and education align perfectly with their requirements"
    },
    {
      name: "Healthcare International",
      matchScore: 88,
      industry: "Healthcare",
      openPositions: 8,
      salaryRange: "PHP 50,000-70,000",
      location: "Dubai, UAE",
      reason: "Strong match based on your communication skills and certifications"
    },
    {
      name: "Hospitality Excellence Group",
      matchScore: 85,
      industry: "Hospitality",
      openPositions: 15,
      salaryRange: "PHP 42,000-58,000",
      location: "Doha, Qatar",
      reason: "Your customer service experience matches their current needs"
    },
    {
      name: "Premier Global Recruitment",
      matchScore: 82,
      industry: "Food & Beverage",
      openPositions: 20,
      salaryRange: "PHP 48,000-62,000",
      location: "Croatia",
      reason: "Multiple positions available that match your skill set"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-[#17960b]';
    if (score >= 60) return 'text-[#ffca1a]';
    return 'text-red-500';
  };

  const getScoreGrade = (score: number) => {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'B+';
    if (score >= 75) return 'B';
    if (score >= 70) return 'C+';
    if (score >= 65) return 'C';
    return 'D';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-[#17960b] text-white';
      case 'good':
        return 'bg-[#ffca1a] text-gray-900';
      case 'needs-improvement':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'bg-red-500 text-white';
      case 'Medium':
        return 'bg-[#ffca1a] text-gray-900';
      case 'Low':
        return 'bg-gray-400 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Preview Overlay for Non-Logged In Users */}
      {!isLoggedIn && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-lg w-full border-[#17960b]/20">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-6">
                <UserCircle className="w-20 h-20 mx-auto mb-4 text-[#17960b]" />
                <h2 className="text-gray-900 mb-3">Unlock Your Applicant Dashboard</h2>
                <p className="text-gray-600 mb-6">
                  Sign up now to access your personalized dashboard and discover:
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#17960b]/10 to-[#ffca1a]/10 rounded-lg p-6 mb-6 text-left">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">AI Resume Grading:</strong> Get instant feedback on your resume with a detailed score and grade
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Skills Assessment:</strong> Detailed analysis of your strengths and areas for improvement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Company Recommendations:</strong> Personalized job matches based on your profile
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Application Tracking:</strong> Monitor your job applications in real-time
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  className="w-full bg-[#17960b] hover:bg-[#17960b]/90 text-white"
                  onClick={onSignUpRequired}
                >
                  <Award className="w-4 h-4 mr-2" />
                  Sign Up Free - Get Your Dashboard
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-[#17960b] text-[#17960b] hover:bg-[#17960b]/10"
                  onClick={onBackToHome}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Back to Job Portal
                </Button>
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <button 
                    onClick={onSignUpRequired}
                    className="text-[#17960b] hover:underline"
                  >
                    Login here
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Welcome, {applicantName}!</h1>
          <p className="text-gray-600">
            Your application has been submitted successfully. Here's your comprehensive resume analysis and personalized recommendations.
          </p>
        </div>

        {/* Overall Score Card */}
        <Card className="mb-8 border-[#17960b]/20">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:border-r border-gray-200">
                <div className="mb-4">
                  <Award className="w-16 h-16 mx-auto text-[#17960b] mb-2" />
                  <h3 className="text-gray-900 mb-1">Overall Resume Score</h3>
                </div>
                <div className={`text-6xl mb-2 ${getScoreColor(overallScore)}`}>
                  {overallScore}
                  <span className="text-3xl">/100</span>
                </div>
                <Badge className={`${getScoreColor(overallScore)} text-xl px-4 py-1`}>
                  Grade: {getScoreGrade(overallScore)}
                </Badge>
              </div>

              <div className="md:col-span-2 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#17960b] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">Your resume shows strong potential!</p>
                      <p className="text-gray-600">
                        You have a solid foundation with excellent education and communication skills.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-[#ffca1a] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">Room for improvement</p>
                      <p className="text-gray-600">
                        Focus on quantifying achievements and obtaining relevant certifications to boost your score to 90+.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-6 h-6 text-[#17960b] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900">Company Matches</p>
                      <p className="text-gray-600">
                        We found 4 companies that are excellent matches for your profile.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Assessment */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-6 h-6 text-[#17960b]" />
            <h2 className="text-gray-900">Skills Assessment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsAssessment.map((skill, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-gray-900 mb-1">{skill.name}</h3>
                      <Badge className={getStatusColor(skill.status)}>
                        {skill.status === 'excellent' && 'Excellent'}
                        {skill.status === 'good' && 'Good'}
                        {skill.status === 'needs-improvement' && 'Needs Improvement'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className={`${getScoreColor(skill.score)}`}>
                        {skill.score}%
                      </span>
                      {skill.status === 'excellent' ? (
                        <TrendingUp className="w-5 h-5 text-[#17960b]" />
                      ) : skill.status === 'needs-improvement' ? (
                        <TrendingDown className="w-5 h-5 text-red-500" />
                      ) : (
                        <TrendingUp className="w-5 h-5 text-[#ffca1a]" />
                      )}
                    </div>
                  </div>
                  <Progress value={skill.score} className="mb-3 h-2" />
                  <p className="text-gray-600">{skill.recommendation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Areas for Improvement */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-6 h-6 text-[#ffca1a]" />
            <h2 className="text-gray-900">Areas for Improvement</h2>
          </div>

          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="space-y-4">
                {areasForImprovement.map((area, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-start gap-4 pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                  >
                    <Badge className={`${getImpactColor(area.impact)} shrink-0`}>
                      {area.impact} Impact
                    </Badge>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-2">{area.area}</h3>
                      <p className="text-gray-600">{area.suggestion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Companies */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-6 h-6 text-[#17960b]" />
            <h2 className="text-gray-900">Recommended Companies for You</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recommendedCompanies.map((company, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-2">{company.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="border-[#17960b] text-[#17960b]">
                          {company.industry}
                        </Badge>
                        <Badge variant="outline" className="border-gray-300 text-gray-700">
                          {company.location}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className={`text-3xl mb-1 ${getScoreColor(company.matchScore)}`}>
                        {company.matchScore}%
                      </div>
                      <p className="text-gray-600">Match</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Open Positions:</span>
                      <span className="text-gray-900">{company.openPositions} jobs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Salary Range:</span>
                      <span className="text-gray-900">{company.salaryRange}</span>
                    </div>
                  </div>
                  <div className="bg-[#17960b]/5 p-4 rounded-lg mb-4">
                    <p className="text-gray-700">
                      <span className="text-[#17960b]">Why this match:</span> {company.reason}
                    </p>
                  </div>
                  <Button className="w-full bg-[#17960b] hover:bg-[#17960b]/90 text-white">
                    View Available Positions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="border-[#17960b] text-[#17960b] hover:bg-[#17960b] hover:text-white">
            <FileText className="w-4 h-4 mr-2" />
            Edit My Resume
          </Button>
          <Button className="bg-[#ffca1a] hover:bg-[#ffca1a]/90 text-gray-900">
            <Target className="w-4 h-4 mr-2" />
            Improve My Score
          </Button>
          <Button className="bg-[#17960b] hover:bg-[#17960b]/90 text-white">
            <Briefcase className="w-4 h-4 mr-2" />
            Browse All Jobs
          </Button>
        </div>
      </div>
    </div>
  );
}