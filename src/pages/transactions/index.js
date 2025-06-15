import PageLayout from "@/src/components/layout/page_layout";
import IconButton from "@/src/components/shared/icon_button";
import { IconType } from "@/src/components/shared/icons";
import { ArrowPaginator } from "@/src/components/shared/arrow_paginator";
import SearchInput from "@/src/components/transactions_page/search_input/search_input";
import styled from "styled-components";
import { Button } from "@/src/components/shared/button";
import { TransactionRow } from "@/src/components/transactions_page/transaction_row";
import { TableTitles } from "@/src/components/transactions_page/table_titles";
import { useTransactionStore } from "@/src/stores/transactions_store";
import { LM } from "@/src/components/shared/typography";
import { TableFooter } from "@/src/components/transactions_page/table_footer";
import { useTheme } from "styled-components";

export default function TransactionsPage() {
  const { groupedTransactions } = useTransactionStore();
  const theme = useTheme();

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
    gap: ${({ theme }) => theme.size.l};
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

  function goToCurrentMonth() {
    alert("Current Month");
  }

  function goToPreviousMonth() {
    alert("Previous Month");
  }

  function goToNextMonth() {
    alert("Next Month");
  }

  function goToNextYear() {
    alert("Next Year");
  }

  function getSums() {
    let income = 0;
    let expenses = 0;
    groupedTransactions.forEach((group) => {
      group.transactions.forEach((tx) => {
        if (tx.amount > 0) {
          income += tx.amount;
        } else {
          expenses += tx.amount;
        }
      });
    });
    return { income, expenses };
  }

  const { income, expenses } = getSums();
  const total = income + expenses;

  function weekday(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-EN", { weekday: "long" });
  }

  function formattedDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.toLocaleDateString("en-EN", { day: "2-digit" });
    const month = date.toLocaleDateString("en-EN", { month: "long" });
    return `${day}. ${month}`;
  }

  return (
    <PageLayout title="Transactions">
      <TableHeader>
        <TableNavigationWrapper>
          <IconButton icon={IconType.CALENDAR} onClick={goToCurrentMonth} />
          <ArrowPaginator
            label="2025"
            onClickLeft={goToPreviousMonth}
            onClickRight={goToNextYear}
          />
          <ArrowPaginator
            label="January"
            onClickLeft={goToPreviousMonth}
            onClickRight={goToNextMonth}
          />
          <SearchInput />
          <Button label="NEW" />
        </TableNavigationWrapper>
        <TableTitles />
      </TableHeader>

      <TableContentWrapper>
        {groupedTransactions.length === 0 ? (
          <PlaceholderWrapper>No transactions available</PlaceholderWrapper>
        ) : (
          groupedTransactions.map(({ date, transactions }) => (
            <TransactionsGroupWrapper key={date}>
              <TransactionGroupDateRow>
                <LM $color={theme.text.disabled}>{formattedDate(date)}</LM>
                <LM $color={theme.text.disabled}>{weekday(date)}</LM>
              </TransactionGroupDateRow>
              {transactions.map((tx) => (
                <TransactionRow key={tx.id} transaction={tx} />
              ))}
            </TransactionsGroupWrapper>
          ))
        )}
      </TableContentWrapper>

      <TableFooter income={income} expenses={expenses} total={total} />
    </PageLayout>
  );
}
