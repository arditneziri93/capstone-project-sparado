import styled from "styled-components";
import ConditionalLink from "../conditional_link";
import SidebarItem from "./_sidebar_item";
import { IconType } from "../icons";
import ThemeSwitch from "./_theme_switch";

const SidebarArea = styled.div`
  width: ${({ theme }) => theme.size.xl8};
  padding-top: ${({ theme }) => theme.size.xl};
  padding-left: ${({ theme }) => theme.size.l};
  padding-right: ${({ theme }) => theme.size.l};
  padding-bottom: ${({ theme }) => theme.size.xl};
  background-color: ${({ theme }) => theme.surface.neutral};
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SideBarNavWrapper = styled.div`
  gap: ${({ theme }) => theme.size.xl2};
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const Ul = styled.ul`
  list-style: none;
  gap: ${({ theme }) => theme.size.m};
  display: flex;
  flex-direction: column;

  padding: 0;
`;

export default function Sidebar() {
  return (
    <SidebarArea>
      <SideBarNavWrapper>
        <ConditionalLink href="/">
          <Logo src="/images/logo.svg" alt="Logo" />
        </ConditionalLink>
        <nav aria-label="Sidebar navigation">
          <Ul>
            <SidebarItem
              label="Dashboard"
              icon={IconType.DASHBOARD}
              href="/dashboard"
            />
            <SidebarItem
              label="Transactions"
              icon={IconType.TRANSACTIONS}
              href="/transactions"
            />
            <SidebarItem
              label="Categories"
              icon={IconType.CATEGORIES}
              href="/categories"
            />
            <SidebarItem
              label="Settings"
              icon={IconType.SETTINGS}
              href="/settings"
            />
          </Ul>
        </nav>
      </SideBarNavWrapper>
      <ThemeSwitch defaultChecked={false} />
    </SidebarArea>
  );
}
