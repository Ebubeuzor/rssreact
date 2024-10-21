import React, { useState } from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';
import AdminLayout from '../component/admin/AdminLayout';

const OrderItem = ({ order, onStatusChange }) => {
  const statusColors = {
    New: "bg-blue-500",
    Dispatched: "bg-yellow-500",
    Delivered: "bg-green-500"
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{order.customer}</h3>
        <span className={`${statusColors[order.status]} text-white text-xs font-bold px-2 py-1 rounded-full`}>
          {order.status}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{order.details}</p>
      {order.status === 'New' && (
        <button
          onClick={() => onStatusChange(order.id, 'Dispatched')}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        >
          <Truck className="mr-2 h-4 w-4" /> Mark as Dispatched
        </button>
      )}
      {order.status === 'Dispatched' && (
        <button
          onClick={() => onStatusChange(order.id, 'Delivered')}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        >
          <CheckCircle className="mr-2 h-4 w-4" /> Mark as Delivered
        </button>
      )}
    </div>
  );
};

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", status: "New", details: "2x Pasta" },
    { id: 2, customer: "Jane Smith", status: "Dispatched", details: "1x Ebook" },
    { id: 3, customer: "Alice Brown", status: "Delivered", details: "3x Pasta" },
    { id: 4, customer: "Bob Wilson", status: "New", details: "1x Pizza" },
    { id: 5, customer: "Charlie Davis", status: "Dispatched", details: "2x Salad" },
  ]);

  const [activeTab, setActiveTab] = useState('New');

  const handleStatusChange = (id, status) => {
    setOrders(orders.map(order => (order.id === id ? { ...order, status } : order)));
  };

  const renderOrders = (status) => (
    orders.filter(order => order.status === status).map(order => (
      <OrderItem key={order.id} order={order} onStatusChange={handleStatusChange} />
    ))
  );

  const TabButton = ({ status, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(status)}
      className={`flex-1 py-2 px-4 text-sm font-medium rounded-t-lg ${
        activeTab === status
          ? 'bg-white text-blue-600 border-t border-x border-gray-200'
          : 'bg-gray-100 text-gray-500 hover:text-gray-700 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center justify-center">
        <Icon className="mr-2 h-4 w-4" />
        {status} Orders
      </div>
    </button>
  );

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Orders Dashboard</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-500">{orders.filter(o => o.status === 'New').length}</p>
              <p className="text-gray-600">New Orders</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-500">{orders.filter(o => o.status === 'Dispatched').length}</p>
              <p className="text-gray-600">Dispatched</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-500">{orders.filter(o => o.status === 'Delivered').length}</p>
              <p className="text-gray-600">Delivered</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="flex border-b border-gray-200">
            <TabButton status="New" icon={Package} />
            <TabButton status="Dispatched" icon={Truck} />
            <TabButton status="Delivered" icon={CheckCircle} />
          </div>
          <div className="p-6">
            {renderOrders(activeTab)}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Orders;