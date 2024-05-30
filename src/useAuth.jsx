import { useEffect } from 'react';
import { auth } from './firebase/firebase';

const useAuth = () => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        
        const token = await user.getIdToken();
        localStorage.setItem('authToken', token);
      } else {
        
        localStorage.removeItem('authToken');
      }
    });

    return () => unsubscribe();
  }, []);

  const getToken = () => localStorage.getItem('authToken');

  return { getToken };
};

export default useAuth;
