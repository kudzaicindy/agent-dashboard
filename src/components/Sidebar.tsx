import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Building2,
  Users,
  Wrench,
  ClipboardList,
  BarChart3,
  Settings,
  LogOut,
  Building,
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Building2, label: 'Properties', path: '/properties' },
    { icon: Users, label: 'Tenants', path: '/tenants' },
    { icon: Building, label: 'Service Providers', path: '/providers' },
    { icon: Wrench, label: 'Maintenance', path: '/maintenance' },
    { icon: ClipboardList, label: 'Tasks', path: '/tasks' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Agent Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center space-x-3 text-gray-300 hover:text-white w-full px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;