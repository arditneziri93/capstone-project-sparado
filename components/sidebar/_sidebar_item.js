import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { IconVariant, IconSize, IconComponent } from "../icons";
import { LL } from "../typography";
import ConditionalLink from "../conditional_link";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.size.l};
  padding: ${({ theme }) => theme.size.ml};
  color: inherit;
  text-decoration: none !important;
  list-style: none;
  border-radius: ${({ theme }) => theme.size.ml};

  &:hover {
    background-color: ${({ theme }) => theme.surface.neutralAlt};
    cursor: pointer;
    text-decoration: none !important;
  }

  &.sidebar-item--active {
    background-color: ${({ theme }) => theme.surface.neutralAlt};
    text-decoration: none !important;
  }
`;

export default function SidebarItem({ label, href, icon }) {
  const theme = useTheme();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(router.asPath === href);
  }, [router.asPath, href]);

  return (
    <ConditionalLink href={href} isActive={isActive}>
      <Wrapper className={isActive ? "sidebar-item--active" : ""}>
        <IconComponent
          icon={icon}
          size={IconSize.M}
          color={theme.text.neutral}
          variant={IconVariant.LINEAR}
        />
        <LL color={theme.text.neutral}>{label}</LL>
      </Wrapper>
    </ConditionalLink>
  );
}
