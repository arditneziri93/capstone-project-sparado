import styled from "styled-components";
import Sidebar from "@/src/components/sidebar/sidebar.js";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.surface.neutralAlt};
`;

const ContentArea = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.size.m};
  overflow-y: auto;
`;

export default function AppLayout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <ContentArea>{children}</ContentArea>
    </Wrapper>
  );
}
