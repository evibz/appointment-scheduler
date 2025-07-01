import React from 'react';
import Button from '../ui/Button';
import { format } from 'date-fns';

const Confirmation = ({ appointment, onAddToCalendar, onEmailPDF }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <div className="text-green-500 text-5xl mb-4">✓</div>
      <h2 className="text-2xl font-bold mb-2">Appointment Confirmed!</h2>
      
      <div className="bg-gray-50 rounded-lg p-4 my-6 text-left">
        <p className="font-semibold text-lg mb-1">{appointment.name}</p>
        <p className="text-gray-600 mb-2">{appointment.email}</p>
        
        <div className="flex items-center mt-4">
          <div className="bg-blue-100 p-3 rounded-lg mr-3">
            <span className="text-blue-800 font-bold">📅</span>
          </div>
          <div>
            <p className="font-semibold">{format(appointment.date, 'EEEE, MMMM d, yyyy')}</p>
            <p className="text-gray-600">{appointment.time}</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Button variant="outline" onClick={onAddToCalendar}>
          Add to Calendar
        </Button>
        <Button variant="primary" onClick={onEmailPDF}>
          Email Confirmation
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;