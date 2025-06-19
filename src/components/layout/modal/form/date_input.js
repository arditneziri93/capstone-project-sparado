import { useRef, useState } from "react";
import styled from "styled-components";
import {
  InputWrapper,
  StyledInputBase,
} from "@/src/components/shared/input/input_base_style";

const StyledDateInput = styled(StyledInputBase).attrs({ type: "date" })`
  &::-webkit-calendar-picker-indicator {
    width: ${({ theme }) => theme.icons.m};
    height: ${({ theme }) => theme.icons.m};
    cursor: pointer;
    filter: ${({ $focused }) => ($focused ? "invert(1)" : "invert(0.5)")};
  }
`;

export default function DateInput({ value, onChange, placeholder }) {
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper onClick={() => inputRef.current?.focus()}>
      <StyledDateInput
        ref={inputRef}
        $focused={isFocused}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputWrapper>
  );
}
