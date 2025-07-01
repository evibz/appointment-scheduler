import React from 'react';
import { format } from 'date-fns';

const AppointmentItem = ({ appointment }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{appointment.name}</h3>
          <p className="text-gray-600">{appointment.email} | {appointment.phone}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs ${
          appointment.status === 'confirmed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {appointment.status}
        </span>
      </div>
      
      <div className="mt-3">
        <p className="font-semibold">
          {format(appointment.date, 'MMM d, yyyy')} at {appointment.time}
        </p>
        {appointment.notes && (
          <p className="mt-2 text-gray-700">{appointment.notes}</p>
        )}
      </div>
      
      <div className="mt-4 flex space-x-2">
        <button className="text-blue-600 hover:text-blue-800">Edit</button>
        <button className="text-red-600 hover:text-red-800">Cancel</button>
      </div>
    </div>
  );
};

export default AppointmentItem;