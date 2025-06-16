import { useContext, useCallback, useEffect, useMemo } from "react";
import { ModalContext, ModalIdContext } from "../context/store";
import { register, getModalId } from "./registry";
import { show, hide, remove, modalPromises } from "./modal_lifecycle";

export function useModal(modal, args) {
  const modals = useContext(ModalContext);
  const contextModalId = useContext(ModalIdContext);
  const isComponent = typeof modal === "function";

  const modalId = modal ? getModalId(modal) : contextModalId;

  if (!modalId) throw new Error("No modal id found in useModal");

  useEffect(() => {
    if (isComponent) register(modalId, modal, args);
  }, [modalId, isComponent, modal, args]);

  const modalInfo = modals[modalId];

  const showCb = useCallback((args) => show(modalId, args), [modalId]);
  const hideCb = useCallback(() => hide(modalId), [modalId]);
  const removeCb = useCallback(() => remove(modalId), [modalId]);

  const resolveCb = useCallback(
    (args) => {
      modalPromises.modalCallbacks[modalId]?.resolve(args);
      delete modalPromises.modalCallbacks[modalId];
    },
    [modalId]
  );

  const rejectCb = useCallback(
    (args) => {
      modalPromises.modalCallbacks[modalId]?.reject(args);
      delete modalPromises.modalCallbacks[modalId];
    },
    [modalId]
  );

  const resolveHide = useCallback(
    (args) => {
      modalPromises.hideModalCallbacks[modalId]?.resolve(args);
      delete modalPromises.hideModalCallbacks[modalId];
    },
    [modalId]
  );

  return useMemo(
    () => ({
      id: modalId,
      args: modalInfo?.args,
      visible: !!modalInfo?.visible,
      keepMounted: !!modalInfo?.keepMounted,
      show: showCb,
      hide: hideCb,
      remove: removeCb,
      resolve: resolveCb,
      reject: rejectCb,
      resolveHide,
    }),
    [
      modalId,
      modalInfo,
      showCb,
      hideCb,
      removeCb,
      resolveCb,
      rejectCb,
      resolveHide,
    ]
  );
}
