import React, { createContext, useState } from "react";

const object = {
  name: "",
  id: "",
  height: "",
  weight:"",
};


export const GlobalContext = createContext(object);

export const GlobalProvider = ({ children }) => {
  const [object, SetName] = useState("");

  const handleCount = (type) => {
    type = type.toLowerCase();
    SetName(type);
  };


  return (
    <GlobalContext.Provider value={{ object, handleCount }}>
      {children}
    </GlobalContext.Provider>
  );
};
