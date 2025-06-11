import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { IconComponent, IconType, IconSize } from "../icons";
import { hexToRgba } from "@/src/utils/hex_to_rgba";

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: ${({ theme }) => `calc(${theme.icons.xl} * 2 + ${theme.size.s} * 2)`};
  height: ${({ theme }) => `calc(${theme.icons.xl} + ${theme.size.s} * 2)`};
  cursor: pointer;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.surface.neutralAlt};
  }

  &:focus + span {
    box-shadow: 0 0 1px ${({ theme }) => theme.surface.neutralHover};
  }

  &:checked + span::before {
    transform: translateX(${({ theme }) => theme.icons.xl});
  }
`;

const Slider = styled.span`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.surface.neutralAlt};
  transition: 0.4s;
  border-radius: ${({ theme }) => theme.icons.xl};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    height: ${({ theme }) => theme.icons.xl};
    width: ${({ theme }) => theme.icons.xl};
    top: ${({ theme }) => theme.size.s};
    left: ${({ theme }) => theme.size.s};
    background-color: ${({ theme }) => theme.surface.neutralHover};
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const IconsRow = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.size.s};
`;

const IconWrapper = styled.span`
  display: flex;
  width: calc(
    ${({ theme }) => theme.icons.xl} + ${({ theme }) => theme.size.s}
  );
  height: calc(
    ${({ theme }) => theme.icons.xl} + ${({ theme }) => theme.size.s}
  );
  align-items: center;
  justify-content: center;
`;

export default function ThemeSwitch({ isDarkMode, onChange }) {
  const theme = useTheme();

  return (
    <SwitchLabel>
      <SwitchInput
        type="checkbox"
        checked={isDarkMode}
        onClick={(e) => {
          e.preventDefault();
          onChange?.();
        }}
        readOnly
      />
      <Slider />
      <IconsRow>
        <IconWrapper>
          <IconComponent
            icon={IconType.LIGHTMODE}
            size={IconSize.M}
            color={
              isDarkMode
                ? hexToRgba(theme.text.neutral, 0.3)
                : theme.text.neutral
            }
          />
        </IconWrapper>
        <IconWrapper>
          <IconComponent
            icon={IconType.DARKMODE}
            size={IconSize.M}
            color={
              isDarkMode
                ? theme.text.neutral
                : hexToRgba(theme.text.neutral, 0.3)
            }
          />
        </IconWrapper>
      </IconsRow>
    </SwitchLabel>
  );
}
