import React from 'react';
import { Download, TrendingUp, TrendingDown, DollarSign, Users, Building2 } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: 'Monthly Revenue Report',
      description: 'Financial performance across all properties',
      date: 'March 2024',
      metrics: {
        total: '$145,250',
        change: '+8.5%',
        positive: true,
      },
      image: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Occupancy Analysis',
      description: 'Property occupancy rates and trends',
      date: 'Q1 2024',
      metrics: {
        total: '92%',
        change: '+2.3%',
        positive: true,
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Maintenance Cost Report',
      description: 'Overview of maintenance expenses',
      date: 'March 2024',
      metrics: {
        total: '$12,450',
        change: '-5.2%',
        positive: false,
      },
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <div className="flex space-x-4">
          <button className="btn btn-secondary flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Export All</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-40">
              <img
                src={report.image}
                alt={report.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">
                  {report.title}
                </h3>
                <p className="text-sm text-gray-200">{report.date}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4">{report.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {report.metrics.total}
                  </p>
                  <div className="flex items-center space-x-1">
                    {report.metrics.positive ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        report.metrics.positive
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {report.metrics.change}
                    </span>
                  </div>
                </div>
                <button className="btn btn-secondary text-sm">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;