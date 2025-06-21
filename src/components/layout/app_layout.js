import styled from "styled-components";
import Sidebar from "@/src/components/sidebar/sidebar";
import TopBar from "@/src/components/mobile_navigation/top_bar";
import BottomBar from "@/src/components/mobile_navigation/bottom_bar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

const SidebarWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentArea = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.size.m};
  overflow-y: auto;
`;

export default function AppLayout({ children }) {
  return (
    <Wrapper>
      <TopBar />
      <Main>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentArea>{children}</ContentArea>
      </Main>
      <BottomBar />
    </Wrapper>
  );
}
