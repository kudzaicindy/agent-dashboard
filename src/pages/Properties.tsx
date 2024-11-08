import React from 'react';
import { Plus, Filter, Search } from 'lucide-react';

const Properties = () => {
  const properties = [
    {
      id: 1,
      name: 'Luxury Downtown Apartment',
      address: '123 Main St, New York, NY 10001',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      units: 24,
      occupancy: '92%',
      revenue: '$45,000',
    },
    {
      id: 2,
      name: 'Riverside Condominiums',
      address: '456 River Road, Chicago, IL 60601',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      units: 36,
      occupancy: '88%',
      revenue: '$62,000',
    },
    {
      id: 3,
      name: 'Garden View Residences',
      address: '789 Park Ave, Los Angeles, CA 90001',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      units: 18,
      occupancy: '95%',
      revenue: '$38,000',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
        <button className="btn btn-primary flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Property</span>
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="btn btn-secondary flex items-center space-x-2">
          <Filter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-2 py-1 bg-white rounded-lg text-sm font-medium">
                {property.units} Units
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{property.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{property.address}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Occupancy</p>
                  <p className="text-lg font-semibold text-gray-900">{property.occupancy}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Monthly Revenue</p>
                  <p className="text-lg font-semibold text-gray-900">{property.revenue}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;