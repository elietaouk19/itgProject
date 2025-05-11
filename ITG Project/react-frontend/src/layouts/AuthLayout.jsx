import React from 'react';
import { useLocation } from 'react-router-dom';
import RBasicLink from '@components/r-basic-link/RBasicLink';

const AuthLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-[30vh] min-w-[70vh] flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-5 rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <img 
            src="/src/assets/itgLogo.png" 
            alt="ITG App Logo" 
            className="mx-auto" 
            style={{ maxWidth: '180px' }} 
          />
        </div>

        <div className="mb-6">
          {children}
        </div>

        <div className="text-center mt-4">
          {location.pathname === '/login' ? (
            <RBasicLink 
              text="Don't have an account?" 
              linkRoute="/register" 
              textClass="text-sm text-gray-600" 
              linkText="Register here" 
              linkClass="text-red-600 hover:text-red-700"
            />
          ) : (
            <RBasicLink
              text="Already have an account?"
              linkText="Login"
              linkRoute="/login"
              linkClass="text-red-600 hover:text-red-700"
              textClass="text-sm text-gray-600"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
