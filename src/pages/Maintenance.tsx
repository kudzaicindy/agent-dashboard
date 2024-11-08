import React from 'react';
import { WrenchIcon, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const Maintenance = () => {
  const requests = [
    {
      id: 1,
      title: 'Leaking Faucet',
      property: 'Luxury Downtown Apartment',
      unit: '12B',
      tenant: 'Sarah Johnson',
      priority: 'High',
      status: 'In Progress',
      date: '2024-03-15',
      description: 'Kitchen faucet is leaking continuously',
      image: 'https://images.unsplash.com/photo-1585909695284-32d2985ac9c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'AC Not Working',
      property: 'Riverside Condominiums',
      unit: '15A',
      tenant: 'Michael Chen',
      priority: 'High',
      status: 'Pending',
      date: '2024-03-14',
      description: 'Air conditioning unit making loud noise and not cooling',
      image: 'https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Paint Touch-up',
      property: 'Garden View Residences',
      unit: '8C',
      tenant: 'Emma Wilson',
      priority: 'Low',
      status: 'Completed',
      date: '2024-03-13',
      description: 'Need touch-up paint in living room wall',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Maintenance Requests</h1>
        <button className="btn btn-primary flex items-center space-x-2">
          <WrenchIcon className="w-5 h-5" />
          <span>New Request</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex">
              <div className="w-48 h-48">
                <img
                  src={request.image}
                  alt={request.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {request.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{request.description}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      request.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : request.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {request.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{request.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <AlertCircle className="w-4 h-4" />
                    <span>Priority: {request.priority}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Unit {request.unit}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maintenance;