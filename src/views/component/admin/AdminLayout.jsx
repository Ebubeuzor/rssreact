import React, { useState } from 'react';
import Header from '../Header';
import { Download, FileText, Home, Layers, Menu, Package, Users, Video, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      
      {/* Mobile header */}
      <div className="lg:hidden bg-[#1F205D] text-white p-4 flex items-center justify-between">
        <span className="text-xl font-bold">Admin Panel</span>
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-[#F27C22] rounded-lg"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0
            fixed lg:static
            top-0
            left-0
            z-40
            w-64
            h-full
            bg-[#1F205D]
            text-white
            transition-transform duration-300 ease-in-out
            lg:h-full
            flex
            flex-col
          `}
        >
          {/* Mobile close button */}
          <div className="lg:hidden p-4 flex justify-end">
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-[#F27C22] rounded-lg"
            >
              <X size={24} />
            </button>
          </div>

          <div className="hidden lg:flex items-center justify-center py-4 text-2xl font-bold">
            Admin Panel
          </div>

          <nav className="flex-1 mt-6 space-y-2">
            {/* Sidebar links */}
            <SidebarLink href="/admin/dashboard" icon={<Home size={20} />} onClick={() => setSidebarOpen(false)}>
              Dashboard
            </SidebarLink>
            <SidebarLink href="/admin/products" icon={<Package size={20} />} onClick={() => setSidebarOpen(false)}>
              Products
            </SidebarLink>
            <SidebarLink href="/admin/categories" icon={<Layers size={20} />} onClick={() => setSidebarOpen(false)}>
              Categories
            </SidebarLink>
            <SidebarLink href="/admin/blog" icon={<FileText size={20} />} onClick={() => setSidebarOpen(false)}>
              Blog
            </SidebarLink>
            <SidebarLink href="/admin/users" icon={<Users size={20} />} onClick={() => setSidebarOpen(false)}>
              Users
            </SidebarLink>
            <SidebarLink href="/admin/videos" icon={<Video size={20} />} onClick={() => setSidebarOpen(false)}>
              Videos
            </SidebarLink>
            <SidebarLink href="/admin/recipes" icon={<FileText size={20} />} onClick={() => setSidebarOpen(false)}>
              Recipes
            </SidebarLink>
            <SidebarLink href="/admin/ebooks" icon={<Download size={20} />} onClick={() => setSidebarOpen(false)}>
              Ebooks
            </SidebarLink>
            <SidebarLink href="/admin/orders" icon={<FileText size={20} />} onClick={() => setSidebarOpen(false)}>
              Orders
            </SidebarLink>
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 w-full">
          <div className="p-4 lg:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

// Sidebar link component
const SidebarLink = ({ href, icon, children, onClick }) => (
  <Link
    to={href}
    className="flex items-center py-2 px-6 hover:bg-[#F27C22] transition-colors duration-200"
    onClick={onClick}
  >
    <span className="mr-3">{icon}</span>
    {children}
  </Link>
);

export default AdminLayout;