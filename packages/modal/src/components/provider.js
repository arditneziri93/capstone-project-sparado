import React from "react";
import { ModalContext, reducer, initialState } from "../context/store.js";
import { setDispatch } from "../core/dispatcher.js";
import { ModalPlaceholder } from "./placeholder.js";

const Provider = ({ children }) => {
  const [modals, dispatch] = React.useReducer(reducer, initialState);
  setDispatch(dispatch);

  return (
    <ModalContext.Provider value={modals}>
      {children}
      <ModalPlaceholder />
    </ModalContext.Provider>
  );
};

export default Provider;
