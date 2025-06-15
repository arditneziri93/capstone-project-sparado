import { useState } from "react";

export function useSearchInput(initialValue = "", onChangeCallback) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    if (typeof onChangeCallback === "function") {
      onChangeCallback(val);
    }
  };

  const clear = () => {
    setValue("");
    if (typeof onChangeCallback === "function") {
      onChangeCallback("");
    }
  };

  return { value, handleChange, clear };
}
