import defaultTransactions from "@/assets/data/transactions.json";
import useLocalStorageState from "use-local-storage-state";

export function useTransactions() {
  const [transactions, setTransactions] = useLocalStorageState("transactions", {
    defaultValue: defaultTransactions,
  });

  return [transactions, setTransactions];
}
