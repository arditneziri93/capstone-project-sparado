import { useTransactions } from "@/src/services/transactions_service";
import { useCategoryStore } from "@/src/stores/categories_store";
import { useMemo } from "react";

export function useTransactionStore() {
  const [transactions, setTransactions] = useTransactions();
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

  const groupedTransactions = useMemo(() => {
    const grouped = {};

    enrichedTransactions.forEach((tx) => {
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
  }, [enrichedTransactions]);

  return {
    transactions: enrichedTransactions,
    groupedTransactions,
    setTransactions,
  };
}
