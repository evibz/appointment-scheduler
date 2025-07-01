import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchAppointments, createAppointment } from '../services/firestore';
import { sendConfirmationEmail, sendAdminNotification } from '../services/emailService';

const AppointmentContext = createContext();

export function useAppointments() {
  return useContext(AppointmentContext);
}

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const loadAppointments = async () => {
      try {
        const apps = await fetchAppointments();
        setAppointments(apps);
      } catch (error) {
        console.error("Error loading appointments:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadAppointments();
  }, []);

  const bookAppointment = async (appointmentData) => {
    try {
      const newAppointment = await createAppointment(appointmentData);
      setAppointments(prev => [...prev, newAppointment]);
      
      // Send confirmation email to client
      await sendConfirmationEmail({
        to_email: appointmentData.email,
        client_name: appointmentData.name,
        appointment_date: new Date(appointmentData.date).toLocaleDateString(),
        appointment_time: appointmentData.time
      });
      
      // Send notification to admin
      await sendAdminNotification(newAppointment);
      
      return newAppointment;
    } catch (error) {
      console.error("Booking failed:", error);
      throw error;
    }
  };

  const value = {
    appointments,
    loading,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    bookAppointment
  };

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
}