import { useModal } from "@oktapod/modal";
import ModalLayout from "@/src/components/layout/modal/modal_layout";
import ModalAction, {
  ModalActionIntent,
  ModalActionType,
} from "@/src/components/layout/modal/modal_action";
import { ModalState } from "@/src/components/layout/modal/modal_state";
import { useState } from "react";

export default function DeleteTransactionModal() {
  const modal = useModal();
  const [state, setState] = useState(ModalState.DEFAULT);

  if (!modal.visible) return null;

  const { id, deleteTransaction } = modal.args || {};

  async function handleDelete() {
    const isSuccessful = await deleteTransaction(id);
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
        title: "Delete transaction",
        description: "Are you sure you want to delete this transaction?",
        actions: [
          <ModalAction
            key="cancel"
            label="Cancel"
            type={ModalActionType.SECONDARY}
            intent={ModalActionIntent.POSITIVE}
            onClick={modal.hide}
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
