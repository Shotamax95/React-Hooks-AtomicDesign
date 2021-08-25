import React, { createContext } from "react";

const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "Shota";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
