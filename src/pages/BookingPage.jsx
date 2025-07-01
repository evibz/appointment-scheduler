import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppointments } from '../contexts/AppointmentContext';
import Calendar from '../components/booking/Calendar';
import TimeSlots from '../components/booking/TimeSlots';
import BookingForm from '../components/booking/BookingForm';
import { generateTimeSlots } from '../utils/dateHelpers';

const BookingPage = () => {
  const navigate = useNavigate();
  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime, bookAppointment } = useAppointments();
  const [step, setStep] = useState(1); // 1: select date, 2: select time, 3: form
  const [availableSlots, setAvailableSlots] = useState([]);

  // Generate time slots (9 AM to 5 PM, 30-minute intervals)
  const allSlots = generateTimeSlots(9, 17, 30);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStep(2);
    // In a real app, you'd fetch already booked slots for this date
    setAvailableSlots(allSlots);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleBookingSubmit = async (formData) => {
    try {
      const appointment = await bookAppointment({
        ...formData,
        date: selectedDate,
        time: selectedTime
      });
      navigate(`/confirmation/${appointment.id}`);
    } catch (error) {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>
      
      {step === 1 && (
        <Calendar selectedDate={selectedDate} onDateSelect={handleDateSelect} />
      )}
      
      {step === 2 && selectedDate && (
        <div>
          <p className="text-lg mb-4">
            Selected Date: {selectedDate.toLocaleDateString()}
          </p>
          <TimeSlots 
            slots={availableSlots} 
            selectedSlot={selectedTime} 
            onSlotSelect={handleTimeSelect} 
          />
          <button 
            onClick={() => setStep(1)}
            className="mt-4 text-blue-600 hover:text-blue-800"
          >
            &larr; Back to Calendar
          </button>
        </div>
      )}
      
      {step === 3 && selectedDate && selectedTime && (
        <div>
          <p className="text-lg mb-4">
            {selectedDate.toLocaleDateString()} at {selectedTime}
          </p>
          <BookingForm 
            date={selectedDate} 
            time={selectedTime} 
            onSubmit={handleBookingSubmit} 
          />
          <button 
            onClick={() => setStep(2)}
            className="mt-4 text-blue-600 hover:text-blue-800"
          >
            &larr; Back to Time Slots
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingPage;