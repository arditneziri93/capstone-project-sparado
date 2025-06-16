import styled from "styled-components";

const TableHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.surface.neutral};
  border-radius: ${({ theme }) => theme.size.m};
  overflow: hidden;
  position: sticky;
  top: -75px;
  z-index: 10;
  box-shadow: 5px 0px 20px ${({ theme }) => theme.surface.neutralAlt};
`;

const TableNavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: stretch;
  padding: ${({ theme }) => theme.size.m + " " + theme.size.l};
  gap: ${({ theme }) => theme.size.m};
  align-items: center;
`;

const TableContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.size.m + " " + theme.size.none};
`;

const TransactionsGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: ${({ theme }) => theme.size.m + " " + theme.size.none};
  gap: ${({ theme }) => theme.size.s};
`;

const TransactionGroupDateRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.size.m + " " + theme.size.l};
`;

const PlaceholderWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.size.xl2};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.size.xl3};
`;

export {
  TableHeader,
  TableNavigationWrapper,
  TableContentWrapper,
  TransactionsGroupWrapper,
  TransactionGroupDateRow,
  PlaceholderWrapper,
};
