import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Target, Users, Award, TrendingUp, CheckCircle, Globe } from 'lucide-react';
import logo from 'figma:asset/636ded4fbbb48605dae08d3a89a37f53cf3273be.png';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#17960b] to-[#0d5e06] text-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img src={logo} alt="Landbase" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6" />
            <h1 className="text-white mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">About Landbase Human Resources</h1>
            <p className="text-white/95 text-base sm:text-lg md:text-xl font-medium">
              We recruit the right people with the right skills at the right time
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            <Card className="border-[#17960b]/20">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#17960b]/10 flex items-center justify-center">
                    <Target className="w-7 h-7 text-[#17960b]" />
                  </div>
                  <h2 className="text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide quality recruitment services that connect skilled Filipino workers with reputable employers worldwide, ensuring safe and fair employment opportunities that contribute to the economic growth of our nation and the professional development of our workers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#17960b]/20">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#ffca1a]/10 flex items-center justify-center">
                    <Award className="w-7 h-7 text-[#ffca1a]" />
                  </div>
                  <h2 className="text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading and most trusted recruitment agency in the Philippines, recognized globally for our commitment to excellence, integrity, and the welfare of Filipino workers. We envision a future where every Filipino has access to legitimate and rewarding overseas employment opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Landbase Human Resources Company is a licensed and accredited recruitment agency based in the Philippines. We specialize in providing comprehensive recruitment solutions for land-based employment opportunities across various industries worldwide. Our team of experienced professionals is dedicated to matching qualified Filipino workers with reputable international employers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#17960b]/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#17960b]" />
              </div>
              <h3 className="text-gray-900 mb-2">Licensed & Accredited</h3>
              <p className="text-gray-600">
                Fully licensed by POEA and accredited by DMW, ensuring compliance with Philippine labor laws
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ffca1a]/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-[#ffca1a]" />
              </div>
              <h3 className="text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-600">
                Our professional recruiters have years of experience in international placement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#17960b]/10 flex items-center justify-center">
                <Globe className="w-8 h-8 text-[#17960b]" />
              </div>
              <h3 className="text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600">
                Connected with trusted employers and partners in multiple countries worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              These values guide everything we do at Landbase Human Resources
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <Card className="border-[#17960b]/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#17960b]/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#17960b]" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We conduct our business with honesty, transparency, and ethical practices
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#17960b]/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#ffca1a]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#ffca1a]" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for the highest quality in our services and placements
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#17960b]/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#17960b]/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#17960b]" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Care</h3>
                  <p className="text-gray-600">
                    We prioritize the welfare and safety of every worker we place
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#17960b]/20 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 pb-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#ffca1a]/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#ffca1a]" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace modern technology to improve our recruitment processes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive recruitment solutions tailored to meet the needs of both workers and employers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-[#17960b]/20">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-gray-900 mb-3">For Job Seekers</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span>Career counseling and job matching services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span>Document processing and visa assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span>Pre-departure orientation and training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span>Post-placement support and welfare monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span>Resume building and interview preparation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#17960b]/20">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-gray-900 mb-3">For Employers</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span>Manpower sourcing and recruitment services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span>Candidate screening and skills assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span>Compliance with Philippine labor regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span>Deployment and mobilization services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#17960b] flex-shrink-0 mt-0.5" />
                    <span>Customized recruitment solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Track Record</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-[#17960b] mb-2">15,000+</div>
              <p className="text-gray-600">Workers Deployed</p>
            </div>
            <div className="text-center">
              <div className="text-[#17960b] mb-2">250+</div>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="text-center">
              <div className="text-[#17960b] mb-2">92%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-[#17960b] mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#17960b] to-[#0d5e06] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're looking for overseas employment or seeking quality Filipino workers, we're here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ffca1a] hover:bg-[#e6b617] text-gray-900 font-semibold px-8 py-3 text-base">
              Browse Jobs
            </Button>
            <Button className="bg-white hover:bg-white/90 text-[#17960b] font-semibold px-8 py-3 text-base border-2 border-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}