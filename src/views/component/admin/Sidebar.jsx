import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package, Layers, Users, FileText, Video, Download } from 'lucide-react'; // Icons for sidebar

const Sidebar = () => {
  return (
    <div className="h-screen bg-[#1F205D] text-white w-64">
      <div className="flex items-center justify-center py-4 text-2xl font-bold">
        Admin Panel
      </div>
      <nav className="mt-10">
        <Link to="/admin/dashboard" className="flex items-center py-2 px-6 hover:bg-[#F27C22]">
          <Home className="mr-3" /> Dashboard
        </Link>
        <Link to="/admin/products" className="flex items-center py-2 px-6 hover:bg-[#F27C22]">
          <Package className="mr-3" /> Products
        </Link>
        <Link to="/admin/categories" className="flex items-center py-2 px-6 hover:bg-[#F27C22]">
          <Layers className="mr-3" /> Categories
        </Link>
        <Link to="/admin/blog" className="flex items-center py-2 px-6 hover:bg-[#F27C22]">
          <FileText className="mr-3" /> Blog
        </Link>
        <Link to="/admin/users" className="flex items-center py-2 px-6 hover:bg-[#F27C22]">
          <Users className="mr-3" /> Users
        </Link>
        <Link to="/admin/videos" className="flex items-center py-2 px-6 hover:bg-[#F27C22]">
          <Video className="mr-3" /> Videos
        </Link>
        <Link to="/admin/recipes" className="flex items-center py-2 px-6 hover:bg-[#F27C22]">
          <FileText className="mr-3" /> Recipes
        </Link>
        <Link to="/admin/ebooks" className="flex items-center py-2 px-6 hover:bg-[#F27C22]">
          <Download className="mr-3" /> Ebooks
        </Link>
        <Link to="/admin/orders" className="flex items-center py-2 px-6 hover:bg-[#F27C22]">
          <FileText className="mr-3" /> Orders
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
