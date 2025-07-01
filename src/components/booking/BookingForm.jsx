import React, { useState } from 'react';
import Button from '../ui/Button';

const BookingForm = ({ date, time, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, date, time });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h3 className="text-xl font-bold mb-4">Your Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Additional Notes</label>
        <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="3"
        />
      </div>
      
      <div className="mt-6">
        <Button type="submit" variant="primary" fullWidth>
          Confirm Appointment
        </Button>
      </div>
    </form>
  );
};

export default BookingForm;