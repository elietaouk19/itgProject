import React from 'react';
import { Outlet } from 'react-router-dom';
import RNavbar from '@components/r-navbar/RNavbar';

const MainLayout = () => {
  const navData = [
    { linkTo: "/institution", title: "Institution" },
    { linkTo: "/logout", title: "Logout" },
  ];

  return (
    <div className="w-full h-screen bg-[#008080] text-white flex flex-col overflow-hidden">
      <RNavbar navData={navData} />

      <main className="flex-grow overflow-auto">
        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-6 h-full flex-grow overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
