import React, { useState } from 'react';
import AppointmentList from './AppointmentList';
import { useAppointments } from '../../contexts/AppointmentContext';

const AdminPanel = () => {
  const { appointments, loading } = useAppointments();
  const [view, setView] = useState('all'); // 'all', 'upcoming', 'past'

  const filterAppointments = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return appointments.filter(app => {
      const appDate = new Date(app.date);
      if (view === 'upcoming') {
        return appDate >= today;
      } else if (view === 'past') {
        return appDate < today;
      }
      return true;
    });
  };

  const filteredApps = filterAppointments();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 rounded-l-lg ${view === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setView('all')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 ${view === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setView('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${view === 'past' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setView('past')}
        >
          Past
        </button>
      </div>
      
      <AppointmentList appointments={filteredApps} loading={loading} />
    </div>
  );
};

export default AdminPanel;