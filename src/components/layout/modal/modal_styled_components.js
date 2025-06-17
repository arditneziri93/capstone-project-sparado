import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.size.xl2};
`;

export const ModalWrapper = styled.div`
  width: 350px;
  padding: ${({ theme }) => theme.size.xl2};
  background: ${({ theme }) => theme.surface.neutral};
  border-radius: ${({ theme }) => theme.size.l};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.xl};
  position: fixed;
  z-index: 1000;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonRow = styled.div`
  padding-top: ${({ theme }) => theme.size.xl};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.size.l};

  & > * {
    flex: 1;
    max-width: 50%;
  }
`;
