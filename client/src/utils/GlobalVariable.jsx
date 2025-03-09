import { createContext, useState } from "react";

// Create Context
export const InsightContext = createContext();

// Provider Component
export const InsightProvider = ({ children }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <InsightContext.Provider value={{ isMaximized, setIsMaximized }}>
      {children}
    </InsightContext.Provider>
  );
};
