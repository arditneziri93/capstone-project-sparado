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
import { ErrorMessage } from "../layout/modal/form/error_message";
import { C } from "../shared/typography";
import ColorPicker from "@/src/components/layout/modal/form/color_picker";

const CategoryFormMode = {
  CREATE: {
    key: "CREATE",
    title: "Add Category",
    description: "Enter the category name and select a color.",
    submitLabel: "Submit",
  },
  EDIT: {
    key: "EDIT",
    title: "Edit Category",
    description: "Update the category name and color.",
    submitLabel: "Update",
  },
};

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  color: z.string().min(1, "Color is required"),
});

export default function UpdateCategoryModal() {
  const modal = useModal();
  const { mode, initialValues, onSubmit } = modal.args || {};
  const [state, setState] = useState(ModalState.DEFAULT);

  const isNew = mode?.key === CategoryFormMode.CREATE.key;
  const title = isNew
    ? CategoryFormMode.CREATE.title
    : CategoryFormMode.EDIT.title;
  const description = isNew
    ? CategoryFormMode.CREATE.description
    : CategoryFormMode.EDIT.description;
  const submitLabel = isNew
    ? CategoryFormMode.CREATE.submitLabel
    : CategoryFormMode.EDIT.submitLabel;

  const {
    watch,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: initialValues?.name ?? "",
      color: initialValues?.color ?? "",
    },
  });

  const handleSubmit = async () => {
    const valid = await trigger();
    if (!valid) return;
    const data = getValues();
    const category = {
      id: isNew ? String(Date.now()) : initialValues?.id,
      name: data.name,
      color: data.color,
    };
    const success = await onSubmit?.(category);
    setState(success ? ModalState.SUCCESS : ModalState.ERROR);
  };

  return (
    <ModalLayout
      state={state}
      modal={modal}
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
      <FormItem title="Name" isRequired>
        <TextInput
          value={watch("name")}
          onChange={(e) => setValue("name", e.target.value)}
          placeholder="Enter name..."
        />
        {errors.name && <ErrorMessage message={errors.name.message} />}
      </FormItem>

      <FormItem title="Color" isRequired>
        <ColorPicker
          selectedColor={watch("color")}
          onSelect={(color) => setValue("color", color)}
        />
        {errors.color && <ErrorMessage message={errors.color.message} />}
      </FormItem>

      <C>
        {isNew
          ? "You can edit this category later if needed."
          : "You can update the name and color of this category."}
      </C>
    </ModalLayout>
  );
}
