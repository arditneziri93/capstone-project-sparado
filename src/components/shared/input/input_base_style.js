import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.surface.neutralAlt};
  padding: ${({ theme }) => theme.size.ml + " " + theme.size.l};
  color: ${({ theme }) => theme.text.neutral};
  border-radius: ${({ theme }) => theme.size.l};
  width: 100%;
  gap: ${({ theme }) => theme.size.l};
  cursor: ${({ $isDate }) => ($isDate ? "pointer" : "text")};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
`;

export const StyledInputBase = styled.input`
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.typography.bodySmall.size};
  font-weight: ${({ theme }) => theme.typography.bodySmall.weight};
  font-family: ${({ theme }) => theme.typography.bodySmall.fontFamily};
  width: 100%;
  outline: none;
  caret-color: ${({ theme }) => theme.text.neutral};
  color: ${({ theme }) => theme.text.neutral};
  margin-left: ${({ $hasIconLeft, theme }) =>
    $hasIconLeft ? theme.size.l : 0};

  &::placeholder {
    color: ${({ theme }) => theme.text.disabled};
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(0.5);
  }
`;
