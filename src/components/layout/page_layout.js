import styled from "styled-components";
import Breadcrumbs from "../shared/breadcrumbs";
import { C } from "../shared/typography";

const OuterWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const LayoutWrapper = styled.div`
  min-width: 800px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.size.xl};
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: ${({ theme }) => theme.size.m};
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Footer = styled.footer`
  min-width: 800px;
  max-width: 1200px;
  width: 100%;
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
        <Footer>
          {" "}
          <C>© 2025 OKTAPOD Software Solutions. All rights reserved.</C>
        </Footer>
      </LayoutWrapper>
    </OuterWrapper>
  );
}
