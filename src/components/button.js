import React from "react";
import styled, { css, useTheme } from "styled-components";
import { LM } from "./typography";

export const ButtonType = {
  FILLED: "filled",
  OUTLINE: "outline",
  GHOST: "ghost",
};

const ButtonStyled = styled.button`
  padding: ${({ theme }) => `${theme.size.ml} ${theme.size.xl}`};
  border-radius: ${({ theme }) => theme.size.ml};
  font-weight: bold;
  border: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &.filled {
    ${({ theme, disabled }) => css`
      background-color: ${disabled
        ? theme.surface.disabled
        : theme.surface.accent};
      &:hover {
        background-color: ${!disabled && theme.surface.accentHover};
      }
    `}
  }

  &.outline {
    ${({ theme, disabled }) => css`
      background-color: transparent;
      border: 2px solid ${disabled ? theme.surface.disabled : theme.text.accent};
      &:hover {
        background-color: ${!disabled && theme.surface.specialHover};
      }
    `}
  }

  &.ghost {
    ${({ theme, disabled }) => css`
      background-color: transparent;
      &:hover {
        background-color: ${!disabled && theme.surface.neutralHover};
      }
    `}
  }
`;

export function Button({
  label,
  type = ButtonType.FILLED,
  disabled = false,
  onClick,
  ...props
}) {
  const theme = useTheme();

  const resolveColor = () => {
    switch (type) {
      case ButtonType.FILLED:
        return theme.text.onDark;
      case ButtonType.OUTLINE:
        return theme.text.accent;
      case ButtonType.GHOST:
      default:
        return theme.text.neutral;
    }
  };

  return (
    <ButtonStyled
      type="button"
      className={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <LM color={resolveColor()}>{label}</LM>
    </ButtonStyled>
  );
}
