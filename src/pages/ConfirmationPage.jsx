import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppointments } from '../contexts/AppointmentContext';
import Confirmation from '../components/booking/Confirmation';
import { generateAppointmentPDF } from '../services/pdfService';

const ConfirmationPage = () => {
  const { id } = useParams();
  const { appointments } = useAppointments();
  const [appointment, setAppointment] = useState(null);
  
  useEffect(() => {
    if (appointments.length > 0) {
      const foundApp = appointments.find(app => app.id === id);
      setAppointment(foundApp);
    }
  }, [id, appointments]);
  
  const handleAddToCalendar = () => {
    // For simplicity, we'll just download an ICS file
    // In a real app, you'd use a library like 'ics-js'
    alert('Adding to calendar functionality would be implemented here.');
  };
  
  const handleEmailPDF = () => {
    if (appointment) {
      generateAppointmentPDF(appointment);
      alert('PDF generated and saved!');
    }
  };

  if (!appointment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Confirmation 
        appointment={appointment}
        onAddToCalendar={handleAddToCalendar}
        onEmailPDF={handleEmailPDF}
      />
    </div>
  );
};

export default ConfirmationPage;