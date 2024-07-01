import React, { useState } from "react";
import { AccountVm, createEmptyTransferVm, TransferVm } from "../transfer.vm";

interface Props {
  accountList: AccountVm[];
  onTrannsfer: (transferInfo: TransferVm) => void;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTrannsfer } = props;
  const [transfer, setTransfer] = useState<TransferVm>(createEmptyTransferVm());
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTrannsfer(transfer);
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Seleccione cuenta origen</label>
          <select
            name="accountId"
            onChange={handleFieldChange}
            value={transfer.accountId}
          >
            {accountList.map((account) => (
              <option key={account.id} value={account.id}>
                {account.alias}
              </option>
            ))}
            <option value="">Seleccione una cuenta</option>
          </select>
        </div>
        <div>
          <label htmlFor="destinationIban">Ingrese IBAN de destino</label>
          <input type="text" name="iban" onChange={handleFieldChange} />
        </div>
        <div>
          <label htmlFor="name">Beneficiario</label>
          <input type="text" name="name" onChange={handleFieldChange} />
        </div>
        <div>
          <label htmlFor="amount">
            Importe <span>(EUR)</span>
          </label>
          <input type="number" name="amount" onChange={handleFieldChange} />
        </div>
        <div>
          <label htmlFor="concept">Concepto</label>
          <input type="text" name="concept" onChange={handleFieldChange} />
        </div>
        <div>
          <label htmlFor="notes">Obervaciones</label>
          <input type="text" name="notes" onChange={handleFieldChange} />
        </div>
        <p>
          Para que la transferencia se realice en otra fecha diferente a la de
          hoy, por favor, seleccione la fecha de ejecución.
        </p>
        <div>
          <label htmlFor="realDateTransfer">Fecha de transferencia</label>
          <input
            name="realDateTransfer"
            type="date"
            onChange={handleFieldChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" name="email" onChange={handleFieldChange} />
        </div>
        <button type="submit">REALIZAR TRANSFERENCIA</button>
      </form>
    </>
  );
};
