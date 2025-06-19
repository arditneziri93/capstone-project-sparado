import { ModalDef } from "@oktapod/modal";
import Modals from ".";
import DeleteTransactionModal from "./delete_transaction_modal";
import AddTransactionModal from "./add_transaction_modal";

const ModalDefList = () => [
  <ModalDef
    key={Modals.DELETETRANSACTION}
    id={Modals.DELETETRANSACTION}
    component={DeleteTransactionModal}
  />,
  <ModalDef
    key={Modals.ADDTRANSACTION}
    id={Modals.ADDTRANSACTION}
    component={AddTransactionModal}
  />,
  <ModalDef
    key={Modals.UPDATETRANSACTION}
    id={Modals.UPDATETRANSACTION}
    component={AddTransactionModal}
  />,
];

export default ModalDefList;
