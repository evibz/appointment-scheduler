import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Appointment Scheduler. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;