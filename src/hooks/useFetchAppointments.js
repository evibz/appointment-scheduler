import { useState, useEffect } from 'react';
import { fetchAppointments } from '../services/firestore';

export default function useFetchAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const apps = await fetchAppointments();
        setAppointments(apps);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    getAppointments();
  }, []);

  return { appointments, loading, error };
}