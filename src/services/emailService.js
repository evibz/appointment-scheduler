import emailjs from 'emailjs-com';

export const sendConfirmationEmail = (templateParams) => {
  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    templateParams,
    process.env.REACT_APP_EMAILJS_USER_ID
  );
};

export const sendAdminNotification = (appointment) => {
  return emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID,
    {
      to_email: process.env.REACT_APP_ADMIN_EMAIL,
      appointment_date: new Date(appointment.date).toLocaleDateString(),
      appointment_time: appointment.time,
      client_name: appointment.name,
      client_email: appointment.email,
      client_phone: appointment.phone
    },
    process.env.REACT_APP_EMAILJS_USER_ID
  );
};