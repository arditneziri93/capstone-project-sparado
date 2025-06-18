import React from "react";
import { Button } from "@/src/components/shared/button";
import { ButtonState } from "@/src/components/shared/button";

export const ModalActionType = {
  PRIMARY: "filled",
  SECONDARY: "outline",
};

export const ModalActionIntent = {
  POSITIVE: ButtonState.DEFAULT,
  NEGATIVE: ButtonState.DANGER,
};

export default function ModalAction({
  label,
  type = ModalActionType.PRIMARY,
  intent = ModalActionIntent.POSITIVE,
  onClick,
}) {
  return (
    <Button label={label} onClick={onClick} variant={intent} type={type} />
  );
}
