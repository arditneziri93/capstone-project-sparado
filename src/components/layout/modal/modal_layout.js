import React from "react";
import { H3, BB } from "@/src/components/shared/typography";
import IconButton from "@/src/components/shared/icon_button";
import { IconType } from "@/src/components/shared/icons";
import {
  Overlay,
  ModalWrapper,
  TopRow,
  ButtonRow,
} from "./modal_styled_components";
import { ModalState } from "./modal_state";
import ModalAction, {
  ModalActionIntent,
  ModalActionType,
} from "./modal_action";
export default function ModalLayout({
  modal,
  state,
  children,
  modalConfigs = {},
  dismissOnClickOutside = true,
  isLarge = false,
}) {
  const resolvedState = state ?? ModalState.DEFAULT;

  const title =
    resolvedState === ModalState.DEFAULT && modalConfigs?.title != null
      ? modalConfigs.title
      : resolvedState.title;

  const description =
    resolvedState === ModalState.DEFAULT && modalConfigs?.description != null
      ? modalConfigs.description
      : resolvedState.description;

  const actions =
    state === ModalState.DEFAULT && modalConfigs?.actions?.length > 0
      ? modalConfigs.actions
      : state.actions?.length > 0
      ? state.actions
      : [
          <ModalAction
            key="default-close"
            label="Close"
            type={ModalActionType.SECONDARY}
            intent={ModalActionIntent.POSITIVE}
            onClick={modal.remove}
          />,
        ];

  const body =
    resolvedState === ModalState.DEFAULT && children != null ? children : null;

  const handleClick = dismissOnClickOutside ? () => modal.remove() : undefined;

  return (
    <Overlay onClick={handleClick}>
      <ModalWrapper isLarge={isLarge} onClick={(e) => e.stopPropagation()}>
        <TopRow>
          <H3>{title}</H3>
          <IconButton icon={IconType.CLOSE} onClick={modal.remove} />
        </TopRow>
        <BB>{description}</BB>
        {children}
        <ButtonRow>{actions}</ButtonRow>
      </ModalWrapper>
    </Overlay>
  );
}
