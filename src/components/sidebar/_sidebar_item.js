import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { IconVariant, IconSize, IconComponent } from "../shared/icons";
import { LL } from "../shared/typography";
import ConditionalLink from "../shared/conditional_link";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.size.l};
  padding: ${({ theme }) => theme.size.ml};
  list-style: none;
  border-radius: ${({ theme }) => theme.size.ml};
  color: ${({ theme }) => theme.text.neutral};
  background-color: transparent;
  transition: background-color 0.5s, color 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.surface.neutralHover};
    cursor: pointer;
  }

  &.sidebar-item--active {
    background-color: ${({ theme }) => theme.surface.neutralHover};
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
          color="currentColor" // ← übernimmt die CSS-Farbe
          variant={IconVariant.LINEAR}
        />
        <LL>{label}</LL>
      </Wrapper>
    </ConditionalLink>
  );
}
