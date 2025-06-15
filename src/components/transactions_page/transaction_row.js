import styled, { useTheme } from "styled-components";
import { Checkbox } from "../shared/checkbox";
import IconButton from "../shared/icon_button";
import { IconType } from "../shared/icons";
import { BS, LL, BB, C, LM } from "../shared/typography";
import {
  TableRowTemplate,
  TCellCenter,
  TCellLeft,
  TCellRight,
} from "./table_row_template";
import { LabelChip, LabelChipType } from "../shared/label_chip";
import { useThemeStore } from "@/src/stores/theme_store";
import getColorBySign from "@/src/utils/get_color_by_sign";

const ActionsWrapper = styled.div`
  opacity: 0;
`;

const TransactionRowWrapper = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.size.m};
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.surface.neutral};
  align-items: center;
  padding: ${({ theme }) => theme.size.m + " " + theme.size.l};

  &:hover {
    border: ${({ theme }) =>
      theme.border.size + " solid " + theme.surface.neutralHover};
    padding-left: ${({ theme }) =>
      `${parseInt(theme.size.l) - parseInt(theme.border.size)}px`};
    padding-right: ${({ theme }) =>
      `${parseInt(theme.size.l) - parseInt(theme.border.size)}px`};
    padding-top: ${({ theme }) =>
      `${parseInt(theme.size.m) - parseInt(theme.border.size)}px`};
    padding-bottom: ${({ theme }) =>
      `${parseInt(theme.size.m) - parseInt(theme.border.size)}px`};
  }

  &:hover ${ActionsWrapper} {
    opacity: 1;
    pointer-events: auto;
  }
`;

const DateContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DateDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export function TransactionRow({ transaction }) {
  const theme = useTheme();
  const { isDarkMode } = useThemeStore();

  function date() {
    const date = new Date(transaction.date);

    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-EN", { month: "short" });
    const weekDay = date.toLocaleString("en-EN", { weekday: "long" });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return { day, weekDay, month, year, time };
  }

  return (
    <TransactionRowWrapper>
      <TableRowTemplate>
        <TCellCenter>
          <Checkbox />
        </TCellCenter>
        <TCellCenter>
          <DateContentWrapper>
            <DateDetails>
              <LL $color={theme.text.disabled}>{date().time}</LL>
            </DateDetails>
          </DateContentWrapper>
        </TCellCenter>
        <TCellCenter>
          {transaction.category && (
            <LabelChip
              label={transaction.category.name}
              color={transaction.category.color}
              type={isDarkMode ? LabelChipType.GHOST : LabelChipType.OUTLINE}
            />
          )}
        </TCellCenter>
        <TCellLeft>
          <BS>{transaction.description}</BS>
        </TCellLeft>
        <TCellRight>
          <LL $color={getColorBySign(transaction.amount)} isMonospace>
            {transaction.amount.toFixed(2)}
          </LL>
        </TCellRight>
        <TCellCenter>
          <ActionsWrapper>
            <IconButton icon={IconType.EDIT} isCompact />
            <IconButton icon={IconType.DELETE} isCompact />
          </ActionsWrapper>
        </TCellCenter>
      </TableRowTemplate>
    </TransactionRowWrapper>
  );
}
