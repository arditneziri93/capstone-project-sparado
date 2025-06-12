import styled from "styled-components";
import { IconComponent, IconSize } from "./icons";

const Button = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.size.ml};
  background-color: ${({ theme }) => theme.surface.transparent};
  color: ${({ theme, disabled }) =>
    disabled ? theme.text.disabled : theme.text.neutral};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? "transparent" : theme.surface.neutralHover};
  }

  &.compact {
    padding: ${({ theme }) => theme.size.m};
  }

  &.regular {
    padding: ${({ theme }) => theme.size.ml};
  }
`;

export default function IconButton({
  icon,
  isCompact = false,
  disabled = false,
  variant = "linear",
  ...props
}) {
  const className = isCompact ? "compact" : "regular";

  return (
    <Button type="button" className={className} disabled={disabled} {...props}>
      <IconComponent
        icon={icon}
        size={IconSize.M}
        variant={variant}
        color="currentColor"
      />
    </Button>
  );
}
