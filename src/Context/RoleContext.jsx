import React, { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export const RoleContextProvider = ({ children }) => {
  const [role, setRole] = useState("");

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = () => useContext(RoleContext);
