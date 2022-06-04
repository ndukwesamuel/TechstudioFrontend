import React, { createContext, useContext, useEffect, useReducer } from "react";

import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
  logout: () => {},
};

const AuthContext = React.createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  let urlsDataOnline = "https://techstudioacademybackend.herokuapp.com/api";
  let urlsDatalocal = "http://127.0.0.1:5000/api";

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        urls: urlsDataOnline,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        name: "sam",
        urlsDataOnline,
        urlsDatalocal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, AuthContext };
