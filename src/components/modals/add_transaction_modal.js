import { useModal } from "@oktapod/modal";
import ModalLayout from "@/src/components/layout/modal/modal_layout";
import ModalAction, {
  ModalActionIntent,
  ModalActionType,
} from "@/src/components/layout/modal/modal_action";
import { ModalState } from "@/src/components/layout/modal/modal_state";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../shared/input/text_input";
import FormItem from "../layout/modal/form/form_item";
import DateInput from "../layout/modal/form/date_input";
import TimeInput from "../layout/modal/form/time_input";
import { FormRow } from "../layout/modal/form/form_row";
import NumberInput from "../layout/modal/form/amount_input";
import CategoryInput from "../layout/modal/form/category_input";
import { C } from "../shared/typography";
import { ErrorMessage } from "../layout/modal/form/error_message";

export const TransactionFormMode = {
  CREATE: {
    key: "CREATE",
    title: "Add Transaction",
    description: "Fill out the form to add a new transaction.",
    submitLabel: "Submit",
  },
  EDIT: {
    key: "EDIT",
    title: "Edit Transaction",
    description: "Update the details of this transaction.",
    submitLabel: "Update",
  },
};

const createFormSchema = ({ id }) =>
  z.object({
    description: z.string().min(1, "Description is required"),
    date: z.string().min(1, "Date is required"),
    time: z.string().min(1, "Time is required"),
    category: z
      .string()
      .min(1, "Category is required")
      .refine((val) => categories.some((c) => c.id === val), {
        message: "Category does not exist",
      }),
    amount: z.coerce.number().refine((val) => val !== 0, {
      message: "Amount cannot be zero",
    }),
  });

export default function TransactionModal() {
  const modal = useModal();
  const { mode, initialValues, onSubmit, categories = [] } = modal.args || {};
  const [state, setState] = useState(ModalState.DEFAULT);

  const isNew = mode?.key === TransactionFormMode.CREATE.key;
  const title = isNew
    ? TransactionFormMode.CREATE.title
    : TransactionFormMode.EDIT.title;
  const description = isNew
    ? TransactionFormMode.CREATE.description
    : TransactionFormMode.EDIT.description;
  const submitLabel = isNew
    ? TransactionFormMode.CREATE.submitLabel
    : TransactionFormMode.EDIT.submitLabel;

  const {
    watch,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createFormSchema(categories)),
    mode: "onTouched",
    defaultValues: {
      description: initialValues?.description ?? "",
      date:
        initialValues?.date?.split("T")[0] ??
        new Date().toISOString().split("T")[0],
      time: initialValues?.date?.split("T")[1]?.substring(0, 5) ?? "12:00",
      category: initialValues?.category?.id ?? "",
      amount: initialValues?.amount ?? 0,
    },
  });

  const handleSubmit = async () => {
    const valid = await trigger();
    if (!valid) return;
    const formData = getValues();
    const transaction = {
      id: isNew ? String(Date.now()) : initialValues?.id,
      amount: formData.amount,
      category: formData.category,
      date: `${formData.date}T${formData.time}`,
      description: formData.description,
    };
    const success = await onSubmit?.(transaction);
    setState(success ? ModalState.SUCCESS : ModalState.ERROR);
  };

  return (
    <ModalLayout
      state={state}
      modal={modal}
      isLarge={state === ModalState.DEFAULT}
      modalConfigs={{
        title,
        description,
        actions: [
          <ModalAction
            key="cancel"
            label="Cancel"
            type={ModalActionType.SECONDARY}
            intent={ModalActionIntent.NEGATIVE}
            onClick={modal.remove}
          />,
          <ModalAction
            key="submit"
            label={submitLabel}
            type={ModalActionType.PRIMARY}
            intent={ModalActionIntent.POSITIVE}
            onClick={handleSubmit}
          />,
        ],
      }}
    >
      <FormItem title="Description" isRequired>
        <TextInput
          value={watch("description")}
          onChange={(e) => setValue("description", e.target.value)}
          placeholder="Add a description..."
        />
        {errors.description && (
          <ErrorMessage message={errors.description.message} />
        )}
      </FormItem>

      <FormRow>
        <FormItem title="Date" isRequired>
          <DateInput
            value={watch("date")}
            onChange={(e) => setValue("date", e.target.value)}
          />
          {errors.date && <ErrorMessage message={errors.date.message} />}
        </FormItem>
        <FormItem title="Time" isRequired>
          <TimeInput
            value={watch("time")}
            onChange={(e) => setValue("time", e.target.value)}
          />
          {errors.time && <ErrorMessage message={errors.time.message} />}
        </FormItem>
      </FormRow>

      <FormRow>
        <FormItem title="Category" isRequired>
          <CategoryInput
            value={watch("category")}
            onChange={(id) => setValue("category", id)}
            categories={categories}
          />
          {errors.category && (
            <ErrorMessage message={errors.category.message} />
          )}
        </FormItem>
        <FormItem title="Amount" isRequired>
          <NumberInput
            initialValue={watch("amount")}
            onChange={({ amount }) => setValue("amount", amount)}
          />
          {errors.amount && <ErrorMessage message={errors.amount.message} />}
        </FormItem>
      </FormRow>

      <C>
        {isNew
          ? "You can edit this transaction later if needed. Make sure the amount and category are correct before submitting."
          : "You can adjust this transaction and save changes."}
      </C>
    </ModalLayout>
  );
}
