import React, { useState, useEffect } from 'react';
import LoadingSpinner from './component/LoadingSpinner';
import Header from './component/Header';
import Footer from './component/Footer';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNotifications([
      { id: 1, message: 'Your order has been shipped!', date: '2024-10-13', read: false },
      { id: 2, message: 'New products are available.', date: '2024-10-12', read: true },
    ]);
    
    setLoading(false);
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  return (
    <>
        <Header/>
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Notifications</h2>
        {loading && <LoadingSpinner/> }
        {!loading && notifications.map(notification => (
            <div key={notification.id} className={`border-b border-gray-200 py-4 ${notification.read ? 'opacity-50' : ''}`}>
            <p className="font-semibold">{notification.message}</p>
            <p className="text-sm text-gray-500">{notification.date}</p>
            {!notification.read && (
                <button 
                onClick={() => markAsRead(notification.id)}
                className="mt-2 text-sm text-blue-500 hover:text-blue-700"
                >
                Mark as read
                </button>
            )}
            </div>
        ))}
        </div>
        <Footer/>

    </>
  );
}