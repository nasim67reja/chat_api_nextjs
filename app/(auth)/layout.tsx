// app/(auth)/layout.js or layout.tsx

import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar with fixed icon */}
      <div className="w-1/4 bg-gray-800 flex items-center justify-center">
        <div className="text-white">
          {/* <img src="/path/to/your/icon.png" alt="Auth Icon" className="h-20 w-20" /> */}
          image
        </div>
      </div>

      {/* Main content area */}
      <div className="w-3/4 bg-gray-100 flex items-center justify-center">
        {children} {/* This will render the login or signup form */}
      </div>
    </div>
  );
};

export default AuthLayout;
