import styled, { useTheme } from "styled-components";
import { IconComponent, IconType, IconSize } from "../../shared/icons";
import { useRef, useState } from "react";
import { useSearchInput } from "./use_search_input";

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.surface.neutralAlt};
  padding: ${({ theme }) => theme.size.ml + " " + theme.size.l};
  color: ${({ theme }) => theme.text.neutral};
  border-radius: ${({ theme }) => theme.size.l};
  width: 100%;
  cursor: text;
`;

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.typography.bodySmall.size};
  font-weight: ${({ theme }) => theme.typography.bodySmall.weight};
  font-family: ${({ theme }) => theme.typography.bodySmall.fontFamily};
  margin-left: ${({ theme }) => theme.size.l};
  width: 100%;
  outline: none;
  caret-color: ${({ theme }) => theme.text.neutral};
  color: ${({ theme }) => theme.text.neutral};

  &::placeholder {
    color: ${({ theme }) => theme.text.disabled};
  }
`;

const ClearIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function SearchInput({ onChange }) {
  const theme = useTheme();
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);

  const { value, handleChange, clear } = useSearchInput("", onChange);

  return (
    <SearchWrapper onClick={() => inputRef.current?.focus()}>
      <IconComponent
        icon={IconType.SEARCH}
        size={IconSize.M}
        color={isFocused ? theme.text.neutral : theme.text.disabled}
      />
      <StyledInput
        ref={inputRef}
        type="text"
        placeholder="Search"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={handleChange}
      />
      {value && (
        <ClearIconWrapper onClick={clear}>
          <IconComponent
            icon={IconType.CLEAR}
            size={IconSize.M}
            color={theme.text.neutral}
          />
        </ClearIconWrapper>
      )}
    </SearchWrapper>
  );
}
