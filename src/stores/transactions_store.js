import { useTransactions } from "@/src/services/transactions_service";
import { useCategoryStore } from "@/src/stores/categories_store";
import { useMemo } from "react";

export function useTransactionStore() {
  const [
    transactions,
    setTransactions,
    addTransactionService,
    updateTransactionService,
    deleteTransactionService,
  ] = useTransactions();
  const { categories } = useCategoryStore();

  const enrichedTransactions = useMemo(() => {
    return [...transactions]
      .map((tx) => {
        const category = categories.find((cat) => cat.id === tx.category);
        return {
          ...tx,
          category: category || undefined,
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [transactions, categories]);

  function getFilteredTransactions(date, search = "") {
    const month = date.getMonth();
    const year = date.getFullYear();

    const filtered = enrichedTransactions.filter((tx) => {
      const txDate = new Date(tx.date);
      const matchesDate =
        txDate.getMonth() === month && txDate.getFullYear() === year;

      const matchesSearch =
        search.trim() === "" ||
        tx.description?.toLowerCase().includes(search.toLowerCase()) ||
        tx.category?.name?.toLowerCase().includes(search.toLowerCase()) ||
        tx.amount?.toString().includes(search.toLowerCase());

      return matchesDate && matchesSearch;
    });

    const grouped = {};

    filtered.forEach((tx) => {
      const dateKey = new Date(tx.date).toISOString().split("T")[0];
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(tx);
    });

    return Object.entries(grouped)
      .sort((a, b) => new Date(b[0]) - new Date(a[0]))
      .map(([date, transactions]) => ({
        date,
        transactions,
      }));
  }

  async function addTransaction(transaction) {
    return await addTransactionService(transaction);
  }

  async function updateTransaction(transaction) {
    return await updateTransactionService(transaction);
  }

  async function deleteTransaction(id) {
    return await deleteTransactionService(id);
  }

  return {
    transactions: enrichedTransactions,
    getFilteredTransactions,
    setTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    categories,
  };
}
