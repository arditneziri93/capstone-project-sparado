import { useRouter } from "next/router";
import styled from "styled-components";
import {
  IconComponent,
  IconSize,
  IconVariant,
} from "@/src/components/shared/icons";
import ConditionalLink from "@/src/components/shared/conditional_link";
import { IconType } from "@/src/components/shared/icons";

const Bar = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    padding: ${({ theme }) => theme.size.m};
    background-color: ${({ theme }) => theme.surface.neutral};
    border-top: 1px solid ${({ theme }) => theme.border.neutral};
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.size.xs};
  color: ${({ $active, theme }) =>
    $active ? theme.text.primary : theme.text.neutral};
`;

export default function BottomBar() {
  const router = useRouter();

  const navItems = [
    { icon: IconType.DASHBOARD, label: "Dashboard", href: "/dashboard" },
    {
      icon: IconType.TRANSACTIONS,
      label: "Transactions",
      href: "/transactions",
    },
    { icon: IconType.CATEGORIES, label: "Categories", href: "/categories" },
    { icon: IconType.SETTINGS, label: "Settings", href: "/settings" },
  ];

  return (
    <Bar>
      {navItems.map(({ icon, href }) => {
        const isActive = router.asPath === href;
        return (
          <ConditionalLink key={href} href={href} isActive={isActive}>
            <Item $active={isActive}>
              <IconComponent
                icon={icon}
                size={IconSize.M}
                variant={IconVariant.LINEAR}
                color="currentColor"
              />
            </Item>
          </ConditionalLink>
        );
      })}
    </Bar>
  );
}
