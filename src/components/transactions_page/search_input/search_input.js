import { IconComponent, IconType, IconSize } from "../../shared/icons";
import { useTheme } from "styled-components";
import { useSearchInput } from "./use_search_input";
import TextInput from "@/src/components/shared/input/text_input";

export default function SearchInput({ onChange }) {
  const theme = useTheme();
  const { value, handleChange, clear } = useSearchInput("", onChange);

  return (
    <TextInput
      value={value}
      onChange={handleChange}
      onClear={clear}
      placeholder="Search"
      isClearable
      iconLeft={(isFocused) => (
        <IconComponent
          icon={IconType.SEARCH}
          size={IconSize.M}
          color={isFocused ? theme.text.neutral : theme.text.disabled}
        />
      )}
    />
  );
}
