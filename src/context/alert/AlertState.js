import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

// States
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  // Initial value
  const initialState = null;

  // Initialize Reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // 1. Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000); // set alert null after 5000ms
  };

  // values & methods
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
