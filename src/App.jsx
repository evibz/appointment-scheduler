import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppointmentProvider } from './contexts/AppointmentContext';
import Layout from './components/layout/Layout';
import BookingPage from './pages/BookingPage';
import AdminPage from './pages/AdminPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <AppointmentProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<BookingPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/confirmation/:id" element={<ConfirmationPage />} />
          </Routes>
        </Layout>
      </Router>
    </AppointmentProvider>
  );
}

export default App;