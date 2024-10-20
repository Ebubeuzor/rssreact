import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/rsslogo.webp'
import { ShoppingCart, User, ChevronDown, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    // Fetch unread notifications count
    // This is a placeholder. Replace with actual API call.
    setUnreadNotifications(3);
  }, []);

  const moveToAnotherPage = (page) => {
    navigate(`/${page}`);
    setIsDropdownOpen(false);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const logout = () => {
    localStorage.clear()
  }

  return (
    <header className="bg-white shadow w-full sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} onClick={() => moveToAnotherPage("")} className="w-20 h-16 object-cover cursor-pointer" alt="RSS Logo" />
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => moveToAnotherPage("cart")} 
            className="flex items-center px-4 py-2 rounded-full border-2 border-[#1F205D] text-[#1F205D] hover:bg-[#1F205D] hover:text-white transition-colors"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            <span className="hidden md:inline">Cart</span>
          </button>
          {isLoggedIn ? (
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2 rounded-full border-2 border-[#1F205D] text-[#1F205D] hover:bg-[#1F205D] hover:text-white transition-colors"
              >
                <User className="w-5 h-5 mr-2" />
                <span className="hidden md:inline">Account</span>
                <ChevronDown className="w-4 h-4 ml-1" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {unreadNotifications}
                  </span>
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <button onClick={() => moveToAnotherPage("orders")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">My Orders</button>
                  <button onClick={() => moveToAnotherPage("notifications")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left relative">
                    Notifications
                    {unreadNotifications > 0 && (
                      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {unreadNotifications}
                      </span>
                    )}
                  </button>
                  <button onClick={() => moveToAnotherPage("account-settings")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Account Settings</button>
                  <button onClick={() => logout()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={() => moveToAnotherPage("login")} 
              className="flex items-center px-4 py-2 rounded-full border-2 border-[#1F205D] text-[#1F205D] hover:bg-[#1F205D] hover:text-white transition-colors"
            >
              <User className="w-5 h-5 mr-2" />
              <span className="hidden md:inline">Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}