import React, { useContext } from "react";
import { ModalContext, ModalIdContext } from "../context/store.js";
import { getModal } from "../core/registry.js";

export const ModalPlaceholder = () => {
  const modals = useContext(ModalContext);
  const ids = Object.keys(modals).filter((id) => !!getModal(id));

  return (
    <>
      {ids.map((id) => {
        const Comp = getModal(id);
        const props = Comp ? Comp.defaultProps || {} : {};

        return Comp ? (
          <ModalIdContext.Provider key={id} value={id}>
            <Comp id={id} {...props} />
          </ModalIdContext.Provider>
        ) : null;
      })}
    </>
  );
};
