import React, { createContext, useContext, useState } from 'react';

const ClicksContext = createContext();

export const ClicksProvider = ({ children }) => {
  const [totalClicks, setTotalClicks] = useState(0);
  const [tarjetaClicks, setTarjetaClicks] = useState({});

  const incrementTotalClicks = () => {
    setTotalClicks(totalClicks + 1);
    console.log(totalClicks)
  };

  const incrementTarjetaClicks = (nombre) => {
    setTarjetaClicks({
      ...tarjetaClicks,
      [nombre]: (tarjetaClicks[nombre] || 0) + 1
    });
  };

  return (
    <ClicksContext.Provider value={{ totalClicks, incrementTotalClicks, tarjetaClicks, incrementTarjetaClicks }}>
      {children}
    </ClicksContext.Provider>
  );
};

export const useClicks = () => {
  return useContext(ClicksContext);
};
