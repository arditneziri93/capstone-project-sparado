let dispatch = () => {
  throw new Error("Dispatch not initialized. Wrap app in ModalProvider.");
};

export const setDispatch = (fn) => {
  dispatch = fn;
};

export const getDispatch = () => dispatch;
