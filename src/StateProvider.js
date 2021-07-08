import React, { createContext, useContext, useReducer } from "react";

//Prepares the DataLayer

export const StateContext = createContext();

//Wrap our App and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
