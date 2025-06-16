import React from "react";
import styled from "styled-components";
import { LM } from "./typography";

export const ButtonType = {
  FILLED: "filled",
  OUTLINE: "outline",
  GHOST: "ghost",
};

export const ButtonState = {
  DEFAULT: "default",
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  DISABLED: "disabled",
};

const ButtonStyled = styled.button`
  padding: ${({ theme }) => `${theme.size.ml} ${theme.size.xl}`};
  border-radius: ${({ theme }) => theme.size.m};
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border: none;
  &:hover {
    cursor: pointer;
  }

  &.filled {
    color: ${({ theme }) => theme.text.onDark};
  }

  &.filled.default {
    background-color: ${({ theme }) => theme.surface.accent};
    &:hover {
      background-color: ${({ theme }) => theme.surface.accentHover};
    }
  }

  &.filled.success {
    background-color: ${({ theme }) => theme.surface.success};
    &:hover {
      background-color: ${({ theme }) => theme.surface.successHover};
    }
  }

  &.filled.danger {
    background-color: ${({ theme }) => theme.surface.danger};
    &:hover {
      background-color: ${({ theme }) => theme.surface.dangerHover};
    }
  }

  &.filled.warning {
    background-color: ${({ theme }) => theme.surface.warning};
    &:hover {
      background-color: ${({ theme }) => theme.surface.warningHover};
    }
  }

  &.filled.info {
    background-color: ${({ theme }) => theme.surface.info};
    &:hover {
      background-color: ${({ theme }) => theme.surface.infoHover};
    }
  }

  &.filled.disabled {
    background-color: ${({ theme }) => theme.surface.disabled};
    color: ${({ theme }) => theme.text.onDark};
  }

  &.outline {
    background-color: transparent;
    border: ${({ theme }) => theme.border.neutral} solid;
    padding: ${({ theme }) => {
      const ml = parseInt(theme.size.ml);
      const xl = parseInt(theme.size.xl);
      const border = parseInt(theme.border.size);
      return `${ml - border}px ${xl - border}px`;
    }};
    &:hover {
      background-color: ${({ theme }) => theme.surface.neutralHover};
    }
  }

  &.outline.default {
    color: ${({ theme }) => theme.text.accent};
    border-color: ${({ theme }) => theme.border.accent};
  }

  &.outline.success {
    color: ${({ theme }) => theme.text.success};
    border-color: ${({ theme }) => theme.border.success};
  }

  &.outline.danger {
    color: ${({ theme }) => theme.text.danger};
    border-color: ${({ theme }) => theme.border.danger};
  }

  &.outline.warning {
    color: ${({ theme }) => theme.text.warning};
    border-color: ${({ theme }) => theme.border.warning};
  }

  &.outline.info {
    color: ${({ theme }) => theme.text.info};
    border-color: ${({ theme }) => theme.border.info};
  }

  &.outline.disabled {
    color: ${({ theme }) => theme.text.disabled};
    border-color: ${({ theme }) => theme.surface.disabled};
    &:hover {
      background-color: transparent;
    }
  }

  &.ghost {
    background-color: transparent;
    &:hover {
      background-color: ${({ theme }) => theme.surface.neutralHover};
    }
  }

  &.ghost.default {
    color: ${({ theme }) => theme.text.neutral};
  }

  &.ghost.success {
    color: ${({ theme }) => theme.text.success};
  }

  &.ghost.danger {
    color: ${({ theme }) => theme.text.danger};
  }

  &.ghost.warning {
    color: ${({ theme }) => theme.text.warning};
  }

  &.ghost.info {
    color: ${({ theme }) => theme.text.info};
  }

  &.ghost.disabled {
    color: ${({ theme }) => theme.text.disabled};
    &:hover {
      background-color: transparent;
    }
  }

  &.disabled:hover {
    cursor: not-allowed;
  }
`;

export function Button({
  label,
  type = ButtonType.FILLED,
  state = ButtonState.DEFAULT,
  onClick,
  ...props
}) {
  const finalClass = `${type} ${state}`;

  return (
    <ButtonStyled
      type="button"
      className={finalClass}
      onClick={state === ButtonState.DISABLED ? undefined : onClick}
      {...props}
    >
      <LM color="inherit">{label}</LM>
    </ButtonStyled>
  );
}
