import { IconType } from "./_icon_type";
import { IconSize } from "./_icon_size";
import { IconVariant } from "./_icon_variant";

export const IconComponent = ({
  icon = IconType.HOME,
  size = IconSize.M,
  color = "inherit",
  variant = IconVariant.LINEAR,
  ...props
}) => {
  if (!icon) return null;
  return icon({ size, color, variant, ...props });
};
