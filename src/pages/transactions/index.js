import PageLayout from "@/src/components/layout/page_layout";
import IconButton from "@/src/components/shared/icon_button";
import { IconType } from "@/src/components/shared/icons";
import {
  Paginator,
  PaginatorConfig,
  PaginatorWidth,
} from "@/src/components/shared/arrow_paginator";
import SearchInput from "@/src/components/transactions_page/search_input/search_input";
import { Button } from "@/src/components/shared/button";
import { TransactionRow } from "@/src/components/transactions_page/transaction_row";
import { TableTitles } from "@/src/components/transactions_page/table_titles";
import { useTransactionStore } from "@/src/stores/transactions_store";
import { LM } from "@/src/components/shared/typography";
import { TableFooter } from "@/src/components/transactions_page/table_footer";
import { useTheme } from "styled-components";
import { useMonthPagination } from "@/src/hooks/use_month_pagination";
import {
  TableHeader,
  TableNavigationWrapper,
  TableContentWrapper,
  TransactionsGroupWrapper,
  TransactionGroupDateRow,
  PlaceholderWrapper,
} from "@/src/components/transactions_page/page_styled_components";

import { useState } from "react";
import { show } from "@oktapod/modal";
import Modals from "@/src/components/modals";
import { dayAndMonth, weekday } from "@/src/utils/formate_date_time";
import { TransactionFormMode } from "@/src/components/modals/add_transaction_modal";

export default function TransactionsPage() {
  const {
    year,
    month,
    date,
    goToCurrentMonth,
    goToPreviousMonth,
    goToNextMonth,
    goToPreviousYear,
    goToNextYear,
  } = useMonthPagination();

  const {
    getFilteredTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    categories,
  } = useTransactionStore();
  const [search, setSearch] = useState("");
  const groupedTransactions = getFilteredTransactions(date);
  const filteredTransactions = getFilteredTransactions(date, search);

  const theme = useTheme();

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

  function handleCreate() {
    show(Modals.ADDTRANSACTION, {
      mode: TransactionFormMode.CREATE,
      onSubmit: async (transaction) => {
        return await addTransaction(transaction);
      },
      categories,
    });
  }

  function handleUpdate(transaction) {
    show(Modals.ADDTRANSACTION, {
      mode: TransactionFormMode.EDIT,
      initialValues: transaction,
      onSubmit: async (transaction) => {
        return await updateTransaction(transaction);
      },
      categories,
    });
  }

  function handleDelete(id) {
    show(Modals.DELETETRANSACTION, { id, deleteTransaction });
  }

  const { income, expenses } = getSums();
  const total = income + expenses;

  return (
    <PageLayout title="Transactions">
      <TableHeader>
        <TableNavigationWrapper>
          <IconButton icon={IconType.CALENDAR} onClick={goToCurrentMonth} />
          <Paginator
            label={year}
            onClickLeft={goToPreviousYear}
            onClickRight={goToNextYear}
            config={PaginatorConfig(
              IconType.LEFT,
              IconType.RIGHT,
              PaginatorWidth.YEAR
            )}
          />
          <Paginator
            label={month}
            onClickLeft={goToPreviousMonth}
            onClickRight={goToNextMonth}
          />
          <SearchInput onChange={(val) => setSearch(val)} />
          <Button label="NEW" onClick={handleCreate} />
        </TableNavigationWrapper>
        <TableTitles />
      </TableHeader>

      <TableContentWrapper>
        {filteredTransactions.length === 0 ? (
          <PlaceholderWrapper>No transactions available</PlaceholderWrapper>
        ) : (
          filteredTransactions.map(({ date, transactions }) => (
            <TransactionsGroupWrapper key={date}>
              <TransactionGroupDateRow>
                <LM $color={theme.text.disabled}>{dayAndMonth(date)}</LM>
                <LM $color={theme.text.disabled}>{weekday(date)}</LM>
              </TransactionGroupDateRow>
              {transactions.map((tx) => (
                <TransactionRow
                  key={tx.id}
                  transaction={tx}
                  onDelete={(value) => {
                    handleDelete(value);
                  }}
                  onEdit={(value) => {
                    handleUpdate(tx);
                  }}
                />
              ))}
            </TransactionsGroupWrapper>
          ))
        )}
      </TableContentWrapper>

      <TableFooter income={income} expenses={expenses} total={total} />
    </PageLayout>
  );
}
