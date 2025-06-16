import { useEffect } from "react";
import { register, unregister } from "../core/registry.js";

export const ModalDef = ({ id, component }) => {
  useEffect(() => {
    register(id, component);
    return () => unregister(id);
  }, [id, component]);

  return null;
};
