import React from 'react';
import { UserPlus, Filter, Search, Star, Phone, MapPin } from 'lucide-react';

const ServiceProviders = () => {
  const providers = [
    {
      id: 1,
      name: 'Elite Plumbing Services',
      type: 'Plumbing',
      rating: 4.8,
      reviews: 156,
      location: 'New York, NY',
      phone: '(555) 234-5678',
      available: true,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      specialist: 'John Smith',
    },
    {
      id: 2,
      name: 'Quick Fix Electric',
      type: 'Electrical',
      rating: 4.9,
      reviews: 203,
      location: 'Brooklyn, NY',
      phone: '(555) 345-6789',
      available: true,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      specialist: 'Mike Johnson',
    },
    {
      id: 3,
      name: 'Green Thumb Gardens',
      type: 'Landscaping',
      rating: 4.7,
      reviews: 128,
      location: 'Queens, NY',
      phone: '(555) 456-7890',
      available: false,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      specialist: 'Sarah Davis',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Service Providers</h1>
        <button className="btn btn-primary flex items-center space-x-2">
          <UserPlus className="w-5 h-5" />
          <span>Add Provider</span>
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search providers..."
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
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={provider.image}
                alt={provider.name}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                  provider.available
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {provider.available ? 'Available' : 'Busy'}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-gray-600">{provider.type}</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">
                    {provider.rating} ({provider.reviews})
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{provider.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">{provider.phone}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProviders;