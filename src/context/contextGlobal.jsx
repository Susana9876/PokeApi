import React, { createContext, useState } from "react";

const name = {
  name: "",
};

const id = {
    id: "",
};
// const initialuser = {
//   username: "",
// };

export const GlobalContext = createContext(name);
export const GlobalIDPokemon = createContext(id);

export const GlobalProvider = ({ children }) => {
  const [name, SetName] = useState("");
  const [id, SetID] = useState("");

  const handleCount = (type) => {
    type = type.toLowerCase();
    SetName(type);
  };

  const handleUser = (item) => {
    SetID(item);
  };

  return (
    <GlobalContext.Provider value={{ name, id, handleCount, handleUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
