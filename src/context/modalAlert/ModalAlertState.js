import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ModalAlertContext from "./modalAlertContext";
import modalAlertReducer from "./modalAlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const ModalAlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(modalAlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <ModalAlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </ModalAlertContext.Provider>
  );
};

export default ModalAlertState;
