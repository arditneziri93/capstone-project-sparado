import defaultTransactions from "@/assets/data/transactions.json";
import useLocalStorageState from "use-local-storage-state";

export function useTransactions() {
  const [transactions, setTransactions] = useLocalStorageState("transactions", {
    defaultValue: defaultTransactions,
  });

  async function deleteTransaction(id) {
    let wasDeleted = false;
    setTransactions((prev) => {
      const updated = prev.filter((t) => t.id !== id);
      wasDeleted = updated.length !== prev.length;
      return updated;
    });

    return wasDeleted;
  }

  return [transactions, setTransactions, deleteTransaction];
}
