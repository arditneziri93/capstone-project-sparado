import styled from "styled-components";
import ConditionalLink from "@/src/components/shared/conditional_link";
import ThemeSwitch from "@/src/components/sidebar/_theme_switch";
import { useThemeStore } from "@/src/stores/theme_store";

const Bar = styled.header`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.size.m + " " + theme.size.xl2};
    background-color: ${({ theme }) => theme.surface.neutral};
  }
`;

const Logo = styled.img`
  height: 100%;
  width: auto;
`;

export default function TopBar() {
  const { isDarkMode, setDarkMode } = useThemeStore();

  return (
    <Bar>
      <ConditionalLink href="/">
        <Logo src="/images/logo.svg" alt="Logo" />
      </ConditionalLink>
      <ThemeSwitch
        isDarkMode={isDarkMode}
        onToggle={(val) => setDarkMode(val)}
      />
    </Bar>
  );
}
