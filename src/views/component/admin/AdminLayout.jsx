import React from 'react';
import Sidebar from './Sidebar';
import Header from '../Header';
import Footer from '../Footer';

const AdminLayout = ({ children }) => {
  return (
    <>
    
    <Header/>

    <div className="flex">
      <Sidebar />
        <main className="flex-1 h-screen overflow-y-auto bg-gray-100">
            <div className="p-6">
                {children}
            </div>
        </main>
    </div>
    
    <Footer/>
    
    </>
  );
};

export default AdminLayout;
