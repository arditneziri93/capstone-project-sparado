import styled from "styled-components";
import Breadcrumbs from "../breadcrumbs";
import { C } from "../typography";

const OuterWrapper = styled.div`
  min-height: 98vh;
  display: flex;
  flex-direction: column;
`;

const LayoutWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.size.l};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({ theme }) => theme.size.l};
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Footer = styled.footer`
  text-align: center;
  padding: ${({ theme }) => theme.size.m};
  color: ${({ theme }) => theme.text.disabled};
`;

export default function PageLayout({ title, breadcrumbs = [], children }) {
  return (
    <OuterWrapper>
      <LayoutWrapper>
        <header>
          <Breadcrumbs />
        </header>

        <h1>{title}</h1>

        <Main>{children}</Main>
      </LayoutWrapper>

      <Footer>
        {" "}
        <C>© 2025 OKTAPOD Software Solutions. All rights reserved.</C>
      </Footer>
    </OuterWrapper>
  );
}
