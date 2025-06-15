import { useTheme } from "styled-components";

export default function getColorBySign(value) {
  const theme = useTheme();
  const parsedValue = parseFloat(value);
  console.log(parsedValue + " " + typeof parsedValue);
  if (isNaN(parsedValue)) return theme.text.neutral;
  if (parsedValue > 0) return theme.text.success;
  if (parsedValue < 0) return theme.text.danger;
  return theme.text.neutral;
}
