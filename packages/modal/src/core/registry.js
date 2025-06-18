let uidSeed = 0;
const MODAL_REGISTRY = {};
const symModalId = Symbol("ModalId");

export const register = (id, comp, props) => {
  if (!comp)
    throw new Error(`Cannot register modal "${id}" without component.`);
  MODAL_REGISTRY[id] = { comp, props };
};

export const unregister = (id) => {
  if (!MODAL_REGISTRY[id] && process.env.NODE_ENV === "development") {
    console.warn(`Tried to unregister unknown modal "${id}"`);
  }
  delete MODAL_REGISTRY[id];
};

export const getModal = (id) => MODAL_REGISTRY[id]?.comp;

export const getModalId = (modal) => {
  if (typeof modal === "string") return modal;
  if (!modal[symModalId]) modal[symModalId] = `_modal_${uidSeed++}`;
  return modal[symModalId];
};
