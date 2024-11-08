import React from 'react';
import { Plus, Calendar, Clock, CheckCircle } from 'lucide-react';

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'Property Inspection',
      property: 'Luxury Downtown Apartment',
      dueDate: '2024-03-20',
      priority: 'High',
      status: 'Pending',
      assignee: {
        name: 'John Doe',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: 'Lease Renewal Meeting',
      property: 'Riverside Condominiums',
      dueDate: '2024-03-22',
      priority: 'Medium',
      status: 'In Progress',
      assignee: {
        name: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: 'Maintenance Follow-up',
      property: 'Garden View Residences',
      dueDate: '2024-03-25',
      priority: 'Low',
      status: 'Completed',
      assignee: {
        name: 'Michael Chen',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
        <button className="btn btn-primary flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>New Task</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid gap-4 p-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  checked={task.status === 'Completed'}
                  onChange={() => {}}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600">{task.property}</p>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{task.dueDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src={task.assignee.image}
                    alt={task.assignee.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-600">
                    {task.assignee.name}
                  </span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    task.priority === 'High'
                      ? 'bg-red-100 text-red-800'
                      : task.priority === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {task.priority}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    task.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : task.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {task.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;