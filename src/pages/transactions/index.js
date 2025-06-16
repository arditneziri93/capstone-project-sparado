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
import {
  TableHeader,
  TableNavigationWrapper,
  TableContentWrapper,
  TransactionsGroupWrapper,
  TransactionGroupDateRow,
  PlaceholderWrapper,
} from "@/src/components/transactions_page/page_styled_components";

export default function TransactionsPage() {
  const { groupedTransactions } = useTransactionStore();
  const theme = useTheme();

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
