import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import logo from 'figma:asset/636ded4fbbb48605dae08d3a89a37f53cf3273be.png';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation for demo
    if (isLogin) {
      if (formData.username && formData.password) {
        onLogin();
      }
    } else {
      if (formData.fullName && formData.email && formData.password && formData.confirmPassword) {
        if (formData.password === formData.confirmPassword) {
          onLogin();
        } else {
          alert('Passwords do not match!');
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7f0] to-[#e8f5e3] flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-6">
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="Landbase HR" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#17960b] mb-3 sm:mb-4">
              Welcome to Landbase HR Portal
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
              Recruiting the right people with the right skills at the right time
            </p>
          </div>
          <div className="hidden lg:block space-y-4 text-gray-600">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#17960b] rounded-full mt-2"></div>
              <p className="text-base">Browse thousands of job opportunities worldwide</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#17960b] rounded-full mt-2"></div>
              <p className="text-base">Build your professional resume with our easy-to-use builder</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#17960b] rounded-full mt-2"></div>
              <p className="text-base">Get personalized job recommendations based on your profile</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login/Signup Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border-4 border-[#17960b] p-6 sm:p-8">
            {/* Tab Toggle */}
            <div className="flex gap-2 mb-6 sm:mb-8 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-md font-semibold text-sm sm:text-base transition-all ${
                  isLogin
                    ? 'bg-[#17960b] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                LOGIN
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-md font-semibold text-sm sm:text-base transition-all ${
                  !isLogin
                    ? 'bg-[#17960b] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                SIGN UP
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {!isLogin && (
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 font-semibold mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="h-12 border-2 border-gray-300 focus:border-[#17960b] rounded-lg"
                    required={!isLogin}
                  />
                </div>
              )}

              {isLogin ? (
                <div>
                  <Label htmlFor="username" className="text-gray-700 font-semibold mb-2 block">
                    Username
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                    className="h-12 border-2 border-gray-300 focus:border-[#17960b] rounded-lg"
                    required={isLogin}
                  />
                </div>
              ) : (
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 border-2 border-gray-300 focus:border-[#17960b] rounded-lg"
                    required={!isLogin}
                  />
                </div>
              )}

              <div>
                <Label htmlFor="password" className="text-gray-700 font-semibold mb-2 block">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-12 border-2 border-gray-300 focus:border-[#17960b] rounded-lg"
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <Label htmlFor="confirmPassword" className="text-gray-700 font-semibold mb-2 block">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="h-12 border-2 border-gray-300 focus:border-[#17960b] rounded-lg"
                    required={!isLogin}
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#17960b]" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-[#17960b] hover:text-[#0d5e06] font-medium">
                    Forgot Password?
                  </a>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-[#17960b] hover:bg-[#0d5e06] text-white font-bold text-base rounded-lg shadow-lg"
              >
                {isLogin ? 'Login' : 'Create Account'}
              </Button>

              {!isLogin && (
                <p className="text-xs text-gray-500 text-center mt-4">
                  By signing up, you agree to our{' '}
                  <a href="#" className="text-[#17960b] hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-[#17960b] hover:underline">
                    Privacy Policy
                  </a>
                </p>
              )}
            </form>
          </div>

          {/* Additional Info */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            POEA Licensed • DMW Accredited • Trusted Since 2014
          </p>
        </div>
      </div>
    </div>
  );
}