export default function getColorBySign(value, theme) {
  const parsedValue = parseFloat(value);
  console.log(parsedValue + " " + typeof parsedValue);
  if (isNaN(parsedValue)) return theme.text.neutral;
  if (parsedValue > 0) return theme.text.success;
  if (parsedValue < 0) return theme.text.danger;
  return theme.text.neutral;
}
