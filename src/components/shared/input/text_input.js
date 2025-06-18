import styled from "styled-components";
import { useRef, useState } from "react";
import {
  InputWrapper,
  StyledInputBase,
} from "@/src/components/shared/input/input_base_style";
import {
  IconComponent,
  IconType,
  IconSize,
} from "@/src/components/shared/icons";

const TextAlign = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
};

const StyledTextInput = styled(StyledInputBase)`
  text-align: ${({ $align }) => $align || "left"};
  font-size: ${({ theme }) => theme.typography.labelLarge.size} !important;
  font-family: ${({ $isMonospace, theme }) =>
    $isMonospace
      ? "'Roboto Mono', monospace"
      : theme.typography.labelLarge.fontFamily} !important;
  color: ${({ $color, theme }) => $color || theme.text.neutral};

  &::placeholder {
    color: ${({ theme }) => theme.text.disabled};
  }
`;

const ClearIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  visibility: ${({ $disabled }) => ($disabled ? "hidden" : "visible")};
`;

export default function TextInput({
  iconLeft,
  iconRight,
  value,
  onChange,
  placeholder,
  onClear,
  align = TextAlign.LEFT,
  isMonospace = false,
  isClearable = false,
  color,
}) {
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);

  const renderRightIcon = () => {
    if (iconRight) return iconRight(value ? onClear : null);

    if (isClearable) {
      const disabled = !value?.length;
      return (
        <ClearIconWrapper
          $disabled={disabled}
          onClick={!disabled ? onClear : undefined}
        >
          <IconComponent
            icon={IconType.CLEAR}
            size={IconSize.M}
            color={"#999"}
          />
        </ClearIconWrapper>
      );
    }

    return null;
  };

  return (
    <InputWrapper onClick={() => inputRef.current?.focus()}>
      {iconLeft && iconLeft(isFocused)}
      <StyledTextInput
        ref={inputRef}
        $align={align}
        $isMonospace={isMonospace}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        $color={color}
      />
      {renderRightIcon()}
    </InputWrapper>
  );
}
