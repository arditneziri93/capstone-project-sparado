import { ActionType } from "./store.js";

export const showModal = (modalId, args) => ({
  type: ActionType.SHOW,
  payload: { modalId, args },
});

export const hideModal = (modalId) => ({
  type: ActionType.HIDE,
  payload: { modalId },
});

export const removeModal = (modalId) => ({
  type: ActionType.REMOVE,
  payload: { modalId },
});

export const setModalFlags = (modalId, flags) => ({
  type: ActionType.SET_FLAGS,
  payload: { modalId, flags },
});
