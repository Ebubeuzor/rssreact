import React, { useState, useEffect } from 'react';
import AdminLayout from '../component/admin/AdminLayout';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching users
    const fetchUsers = async () => {
      const fetchedUsers = await new Promise((resolve) => 
        setTimeout(() => resolve([
          { id: 1, name: 'John Doe', isAdmin: false },
          { id: 2, name: 'Jane Smith', isAdmin: true },
        ]), 1000)
      );
      setUsers(fetchedUsers);
    };
    fetchUsers();
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const toggleAdmin = (id) => {
    setUsers(users.map((user) => 
      user.id === id ? { ...user, isAdmin: !user.isAdmin } : user
    ));
  };

  return (

    <AdminLayout>
        
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="flex justify-between items-center bg-gray-200 p-2 rounded">
            <div>
              <h3 className="font-bold">{user.name}</h3>
              <p>{user.isAdmin ? 'Admin' : 'User'}</p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => toggleAdmin(user.id)} 
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                {user.isAdmin ? 'Revoke Admin' : 'Make Admin'}
              </button>
              <button 
                onClick={() => deleteUser(user.id)} 
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
        
    </AdminLayout>
  );
};

export default Users;
