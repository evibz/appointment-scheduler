import React from 'react';
import AppointmentItem from './AppointmentItem';
import Loader from '../ui/Loader';

const AppointmentList = ({ appointments, loading }) => {
  if (loading) return <Loader />;
  
  if (appointments.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No appointments scheduled</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {appointments.map(appointment => (
        <AppointmentItem 
          key={appointment.id} 
          appointment={appointment} 
        />
      ))}
    </div>
  );
};

export default AppointmentList;