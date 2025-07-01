import jsPDF from 'jspdf';

export const generateAppointmentPDF = (appointment) => {
  const doc = new jsPDF();
  
  doc.setFontSize(22);
  doc.text('Appointment Confirmation', 20, 20);
  
  doc.setFontSize(14);
  doc.text(`Name: ${appointment.name}`, 20, 40);
  doc.text(`Email: ${appointment.email}`, 20, 50);
  doc.text(`Phone: ${appointment.phone}`, 20, 60);
  doc.text(`Date: ${new Date(appointment.date).toLocaleDateString()}`, 20, 70);
  doc.text(`Time: ${appointment.time}`, 20, 80);
  
  if (appointment.notes) {
    doc.text(`Notes: ${appointment.notes}`, 20, 90);
  }
  
  doc.save(`appointment-${appointment.id}.pdf`);
  return doc;
};