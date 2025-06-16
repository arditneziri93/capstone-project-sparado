import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCheckBox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: ${({ theme }) => theme.size.s};
  appearance: none;
  border: ${({ theme }) => theme.border.size} solid;
  border-color: ${({ theme }) => theme.border.color.disabled};
  position: relative;
  background-color: transparent;

  &:hover {
    border-color: ${({ theme }) => theme.border.color.neutral};
    background-color: ${({ theme }) => theme.surface.neutralHover};
  }

  &:checked {
    background-color: ${({ theme }) => theme.surface.accent};
    border-color: ${({ theme }) => theme.border.color.accent};
  }

  &:hover:checked {
    border-color: ${({ theme }) => theme.border.color.accent};
    background-color: ${({ theme }) => theme.surface.accentHover};
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 01px;
    left: 5px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export function Checkbox({ initialValue = false, onChange, ...props }) {
  const [checked, setChecked] = useState(initialValue);

  useEffect(() => {
    setChecked(initialValue);
  }, [initialValue]);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  return (
    <StyledCheckBox checked={checked} onChange={handleChange} {...props} />
  );
}
