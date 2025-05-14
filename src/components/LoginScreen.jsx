import React, { useState } from 'react';

const LoginScreen = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login pressed with:', formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1877f2]">facebook</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            name="email"
            placeholder="Email or Phone"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none"
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-blue-500 focus:outline-none"
          />

          <button 
            type="submit"
            className="w-full bg-[#1877f2] text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Log In
          </button>

          <button 
            type="button"
            className="w-full text-[#1877f2] text-sm font-medium hover:underline"
          >
            Forgot Password?
          </button>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">OR</span>
            </div>
          </div>

          <button 
            type="button"
            className="w-full bg-[#42b72a] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
          >
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen; 