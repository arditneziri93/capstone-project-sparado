import defaultTransactions from "@/assets/data/transactions.json";
import useLocalStorageState from "use-local-storage-state";

export function useTransactions() {
  const [transactions, setTransactions] = useLocalStorageState("transactions", {
    defaultValue: defaultTransactions,
  });

  async function addTransactionService(transaction) {
    let added = false;
    setTransactions((prev) => {
      const exists = prev.some((t) => t.id === transaction.id);
      if (!exists) {
        added = true;
        return [...prev, transaction];
      }
      return prev;
    });
    return added;
  }

  async function updateTransactionService(transaction) {
    let wasUpdated = false;
    setTransactions((prev) => {
      const updated = prev.map((t) => {
        if (t.id === transaction.id) {
          wasUpdated = true;
          return transaction;
        }
        return t;
      });
      return updated;
    });
    return wasUpdated;
  }

  async function deleteTransaction(id) {
    let wasDeleted = false;
    setTransactions((prev) => {
      const updated = prev.filter((t) => t.id !== id);
      wasDeleted = updated.length !== prev.length;
      return updated;
    });
    return wasDeleted;
  }

  return [
    transactions,
    setTransactions,
    addTransactionService,
    updateTransactionService,
    deleteTransaction,
  ];
}
