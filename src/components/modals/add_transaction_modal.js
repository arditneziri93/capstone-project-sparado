import { useModal } from "@oktapod/modal";
import ModalLayout from "@/src/components/layout/modal/modal_layout";
import ModalAction, {
  ModalActionIntent,
  ModalActionType,
} from "@/src/components/layout/modal/modal_action";
import { ModalState } from "@/src/components/layout/modal/modal_state";
import { useState } from "react";
import TextInput from "../shared/input/text_input";
import FormItem from "../layout/modal/form/form_item";
import DateInput from "../layout/modal/form/date_input";
import TimeInput from "../layout/modal/form/time_input";
import { FormRow } from "../layout/modal/form/form_row";
import NumberInput from "../layout/modal/form/amount_input";
import CategoryInput from "../layout/modal/form/category_input";
import { C } from "../shared/typography";

export default function AddTransactionModal() {
  const modal = useModal();
  const [state, setState] = useState(ModalState.DEFAULT);

  if (!modal.visible) return null;

  const { id, addTransaction, categories } = modal.args || {};

  async function handleSubmit() {
    const isSuccessful = await addTransaction();
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
      isLarge={state === ModalState.DEFAULT}
      modalConfigs={{
        title: "Add Transaction",
        description: "Fill out the form below to record a new transaction.",

        actions: [
          <ModalAction
            key="cancel"
            label="Cancel"
            type={ModalActionType.SECONDARY}
            intent={ModalActionIntent.NEGATIVE}
            onClick={modal.hide}
          />,
          <ModalAction
            key="add"
            label="SUBMIT"
            type={ModalActionType.PRIMARY}
            intent={ModalActionIntent.POSITIVE}
            onClick={handleSubmit}
          />,
        ],
      }}
    >
      <FormItem title="Description" isRequired>
        <TextInput placeholder="Add a description..." />
      </FormItem>
      <FormRow>
        <FormItem title="Date" isRequired>
          <DateInput />
        </FormItem>
        <FormItem title="Time" isRequired>
          <TimeInput />
        </FormItem>
      </FormRow>
      <FormRow>
        <FormItem title="Category" isRequired>
          <CategoryInput
            value={null}
            onChange={(id) => console.log(id)}
            categories={categories}
          />
        </FormItem>
        <FormItem title="Amount" isRequired>
          <NumberInput />
        </FormItem>
      </FormRow>
      <C>
        You can edit this transaction later if needed. Make sure the amount and
        category are correct before submitting.
      </C>
    </ModalLayout>
  );
}
