import styled from "styled-components";
import { LM } from "@/src/components/shared/typography";
import { Checkbox } from "@/src/components/shared/checkbox";
import {
  TableRowTemplate,
  TCellCenter,
  TCellLeft,
  TCellRight,
} from "@/src/components/transactions_page/table_row_template";

const TableTitlesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.size.l};
`;

const TableTitlesRow = styled(TableRowTemplate)`
  font-size: ${({ theme }) => theme.typography.bodySmall.size};
  font-weight: ${({ theme }) => theme.typography.bodySmall.weight};
  font-family: ${({ theme }) => theme.typography.bodySmall.fontFamily};
  color: ${({ theme }) => theme.text.neutralAlt};
`;

export function TableTitles() {
  return (
    <TableTitlesWrapper>
      <TableTitlesRow>
        <TCellCenter>
          <Checkbox />
        </TCellCenter>
        <TCellCenter>
          <LM>Time</LM>
        </TCellCenter>
        <TCellCenter>
          <LM>Category</LM>
        </TCellCenter>
        <TCellLeft>
          <LM>Description</LM>
        </TCellLeft>
        <TCellRight>
          <LM>Amount</LM>
        </TCellRight>
        <TCellCenter>
          <LM>Actions</LM>
        </TCellCenter>
      </TableTitlesRow>
    </TableTitlesWrapper>
  );
}
