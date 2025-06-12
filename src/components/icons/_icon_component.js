import { IconType } from "./_icon_type";
import { IconSize } from "./_icon_size";
import { IconVariant } from "./_icon_variant";
import { useTheme } from "styled-components";

export const IconComponent = ({
  icon = IconType.HOME,
  size = IconSize.M,
  color,
  variant = IconVariant.LINEAR,
  ...props
}) => {
  const theme = useTheme();
  if (!icon) return null;

  return icon({
    size,
    color: color ?? "currentColor",
    variant,
    ...props,
  });
};
