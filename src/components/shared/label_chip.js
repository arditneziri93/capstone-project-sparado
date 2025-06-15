import React from "react";
import styled, { useTheme } from "styled-components";
import { LM } from "./typography";
import { rgba } from "polished";

export const LabelChipType = {
  FILLED: "filled",
  OUTLINE: "outline",
  GHOST: "ghost",
};

const LabelChipStyled = styled.button`
  padding: ${({ theme }) => `${theme.size.sm} ${theme.size.ml}`};
  border-radius: ${({ theme }) => theme.size.m};
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;

  &.filled {
    color: ${({ theme }) => theme.text.onDark};
    background-color: ${({ $color }) => $color};
  }

  &.outline {
    background-color: transparent;
    border: ${({ theme, $color }) => theme.border.size + " solid " + $color};
    padding: ${({ theme }) => {
      const sm = parseInt(theme.size.sm);
      const ml = parseInt(theme.size.ml);
      const border = theme.border.size;
      return `${sm - border}px ${ml - border}px`;
    }};
    color: ${({ $color }) => $color};
  }

  &.ghost {
    background-color: ${({ $color }) => rgba($color, 0.1)};
    color: ${({ $color }) => $color};
  }
`;

export function LabelChip({ label, type = LabelChipType.OUTLINE, color }) {
  return (
    <LabelChipStyled type="button" className={type} $color={color}>
      <LM color="inherit">{label}</LM>
    </LabelChipStyled>
  );
}
