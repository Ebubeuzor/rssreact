import React from 'react';
import AdminLayout from '../component/admin/AdminLayout';

const Dashboard = () => {
  return (
    <AdminLayout>
      
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Welcome to the Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#F27C22] text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p>120</p>
          </div>
          <div className="bg-[#F27C22] text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Total Categories</h2>
            <p>8</p>
          </div>
          <div className="bg-[#F27C22] text-white p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p>350</p>
          </div>
        </div>
      </div>

    </AdminLayout>
  );
};

export default Dashboard;
