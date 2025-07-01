import { db } from '../firebase/config';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where,
  serverTimestamp 
} from 'firebase/firestore';

// Create new appointment
export const createAppointment = async (appointment) => {
  try {
    const docRef = await addDoc(collection(db, 'appointments'), {
      ...appointment,
      date: new Date(appointment.date), // Ensure date is stored as Date object
      createdAt: serverTimestamp(),
      status: 'confirmed'
    });
    
    return { id: docRef.id, ...appointment };
  } catch (e) {
    console.error("Error adding appointment: ", e);
    throw e;
  }
};

// Fetch appointments
export const fetchAppointments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'appointments'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (e) {
    console.error("Error fetching appointments: ", e);
    throw e;
  }
};

// Get appointments by date (if needed)
export const getAppointmentsByDate = async (date) => {
  try {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    const q = query(
      collection(db, 'appointments'),
      where('date', '>=', startOfDay),
      where('date', '<=', endOfDay)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  } catch (e) {
    console.error("Error fetching appointments by date: ", e);
    throw e;
  }
};