import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      setUser({ username: storedUser, token: storedToken });
    }
    setLoading(false);
  }, []);

  return (
    <AppContext.Provider value={{ cart, setCart, user, setUser, loading }}>
      {children}
    </AppContext.Provider>
  );
};