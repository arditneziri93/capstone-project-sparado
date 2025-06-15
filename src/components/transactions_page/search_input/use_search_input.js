import { useState } from "react";

export function useSearchInput(initialValue, onChangeExternal) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    const val = e.target.value;
    setValue(val);
    if (typeof onChangeExternal === "function") {
      onChangeExternal(val);
    }
  }

  function clear() {
    setValue("");
    if (typeof onChangeExternal === "function") {
      onChangeExternal("");
    }
  }

  return {
    value,
    handleChange,
    clear,
  };
}
