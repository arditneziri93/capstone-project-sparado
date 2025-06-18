import { ModalDef } from "@oktapod/modal";
import DeleteTransactionModal from "./delete_transaction_modal";
import Modals from ".";

const ModalDefList = () => [
  <ModalDef
    key={Modals.DELETETRANSACTION}
    id={Modals.DELETETRANSACTION}
    component={DeleteTransactionModal}
  />,
];

export default ModalDefList;
