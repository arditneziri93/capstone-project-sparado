import { showModal, hideModal, removeModal } from "../context/actions";
import { getDispatch } from "./dispatcher";
import { getModalId, register } from "./registry";

const modalCallbacks = {};
const hideModalCallbacks = {};

/**
 * Show a modal and return a Promise that resolves when the modal is "resolved".
 */
export function show(modal, args) {
  const modalId = getModalId(modal);
  if (typeof modal !== "string") {
    register(modalId, modal);
  }

  getDispatch()(showModal(modalId, args));

  if (!modalCallbacks[modalId]) {
    const promiseObj = {};
    promiseObj.promise = new Promise((res, rej) => {
      promiseObj.resolve = res;
      promiseObj.reject = rej;
    });
    modalCallbacks[modalId] = promiseObj;
  }

  return modalCallbacks[modalId].promise;
}

/**
 * Hide a modal and return a Promise that resolves when "resolveHide" is called.
 */
export function hide(modal) {
  const modalId = getModalId(modal);
  getDispatch()(hideModal(modalId));
  delete modalCallbacks[modalId];

  if (!hideModalCallbacks[modalId]) {
    const promiseObj = {};
    promiseObj.promise = new Promise((res, rej) => {
      promiseObj.resolve = res;
      promiseObj.reject = rej;
    });
    hideModalCallbacks[modalId] = promiseObj;
  }

  return hideModalCallbacks[modalId].promise;
}

/**
 * Remove a modal from registry and memory.
 */
export function remove(modal) {
  const modalId = getModalId(modal);
  getDispatch()(removeModal(modalId));
  delete modalCallbacks[modalId];
  delete hideModalCallbacks[modalId];
}

export const modalPromises = {
  modalCallbacks,
  hideModalCallbacks,
};
