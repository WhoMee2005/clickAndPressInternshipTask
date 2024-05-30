import { useEffect } from 'react';
import { auth } from './firebase/firebase';

const useAuth = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in
        const token = await user.getIdToken();
        localStorage.setItem('authToken', token);
      } else {
        // User is signed out
        localStorage.removeItem('authToken');
      }
    });

    return () => unsubscribe();
  }, []);

  const getToken = () => localStorage.getItem('authToken');

  return { getToken };
};

export default useAuth;
