// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Cleanup the subscription
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
};
