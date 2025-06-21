import { useModal } from "@oktapod/modal";
import ModalLayout from "@/src/components/layout/modal/modal_layout";
import ModalAction, {
  ModalActionIntent,
  ModalActionType,
} from "@/src/components/layout/modal/modal_action";
import { ModalState } from "@/src/components/layout/modal/modal_state";
import { useState } from "react";

export default function DeleteCategoryModal() {
  const modal = useModal();
  const [state, setState] = useState(ModalState.DEFAULT);

  if (!modal.visible) return null;

  const { id, deleteCategory } = modal.args || {};

  async function handleDelete() {
    const isSuccessful = await deleteCategory(id);
    if (isSuccessful) {
      setState(ModalState.SUCCESS);
    } else {
      setState(ModalState.ERROR);
    }
  }

  return (
    <ModalLayout
      state={state}
      modal={modal}
      modalConfigs={{
        title: "Delete category",
        description: "Are you sure you want to delete this category?",
        actions: [
          <ModalAction
            key="cancel"
            label="Cancel"
            type={ModalActionType.SECONDARY}
            intent={ModalActionIntent.POSITIVE}
            onClick={modal.remove}
          />,
          <ModalAction
            key="delete"
            label="Delete"
            type={ModalActionType.PRIMARY}
            intent={ModalActionIntent.NEGATIVE}
            onClick={handleDelete}
          />,
        ],
      }}
    />
  );
}
