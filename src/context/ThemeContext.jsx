import React, { createContext, useContext, useState } from 'react';

// Create a context for theme management
const ThemeContext = createContext();

// Theme colors for different routes
const themeColors = {
  default: 'white', // Orange as default
  home: 'white',    // Orange
  about: '#F57C00',   // Darker Orange
  services: '#FFB74D', // Lighter Orange
  contact: '#FF5722',  // Deep Orange
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default');
  
  // Function to update theme based on current route
  const updateTheme = (route) => {
    if (themeColors[route]) {
      setCurrentTheme(route);
    } else {
      setCurrentTheme('default');
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      themeColor: themeColors[currentTheme], 
      updateTheme,
      allThemeColors: themeColors
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};