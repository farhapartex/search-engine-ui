import React from 'react';

const AuthLayout = ({ children, promotionalContent }) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
      {promotionalContent}
    </div>
  );
};

export default AuthLayout;
