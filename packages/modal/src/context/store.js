import { createContext } from "react";

export const ActionType = {
  SHOW: "modal/show",
  HIDE: "modal/hide",
  REMOVE: "modal/remove",
  SET_FLAGS: "modal/set-flags",
};

export const initialState = {};

export const ModalContext = createContext();
export const ModalIdContext = createContext(null);

export const ALREADY_MOUNTED = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW: {
      const { modalId, args } = action.payload;
      return {
        ...state,
        [modalId]: {
          ...state[modalId],
          id: modalId,
          args,
          visible: true,
          delayVisible: false,
        },
      };
    }
    case ActionType.HIDE: {
      const { modalId } = action.payload;
      if (!state[modalId]) return state;
      return {
        ...state,
        [modalId]: {
          ...state[modalId],
          visible: false,
        },
      };
    }
    case ActionType.REMOVE: {
      const { modalId } = action.payload;
      const newState = { ...state };
      delete newState[modalId];
      return newState;
    }
    case ActionType.SET_FLAGS: {
      const { modalId, flags } = action.payload;
      return {
        ...state,
        [modalId]: {
          ...state[modalId],
          ...flags,
        },
      };
    }
    default:
      return state;
  }
};
