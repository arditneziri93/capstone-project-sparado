import styled, { useTheme } from "styled-components";
import { C, LL } from "@/src/components/shared/typography";
import getColorBySign from "@/src/utils/get_color_by_sign";
import { formatAmount } from "@/src/utils/format_amount";

const TableFooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.size.xl};
  padding-bottom: ${({ theme }) => theme.size.xl2};
  background-color: ${({ theme }) => theme.surface.neutral};
  border-radius: ${({ theme }) => theme.size.m};
  overflow: hidden;
  position: sticky;
  bottom: -15px;
  z-index: 10;
  box-shadow: 5px 0px 20px ${({ theme }) => theme.surface.neutralAlt};
`;

const TableFooterItemWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.size.l};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export function TableFooter({ income, expenses, total }) {
  const theme = useTheme();

  return (
    <TableFooterWrapper>
      <TableFooterItemWrapper>
        <C>Income:</C>
        <LL $color={getColorBySign(income, theme)} isMonospace>
          {formatAmount(income)} €
        </LL>
      </TableFooterItemWrapper>
      <TableFooterItemWrapper>
        <C>Expenses:</C>
        <LL $color={getColorBySign(expenses, theme)} isMonospace>
          {formatAmount(expenses)} €
        </LL>
      </TableFooterItemWrapper>
      <TableFooterItemWrapper>
        <C>Total:</C>
        <LL $color={getColorBySign(total, theme)} isMonospace>
          {formatAmount(total)} €
        </LL>
      </TableFooterItemWrapper>
    </TableFooterWrapper>
  );
}
