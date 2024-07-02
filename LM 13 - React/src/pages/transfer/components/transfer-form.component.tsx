import React, { useState } from "react";
import {
  AccountVm,
  createEmptyTransferVm,
  TransferError,
  TransferVm,
  createEmptyTransferError,
} from "../transfer.vm";
import { validateForm } from "../validations";
import classes from "./transfer-form.component.module.css";
interface Props {
  accountList: AccountVm[];
  onTrannsfer: (transferInfo: TransferVm) => void;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTrannsfer } = props;
  const [transfer, setTransfer] = useState<TransferVm>(createEmptyTransferVm());
  const [errors, setErrors] = useState<TransferError>(
    createEmptyTransferError()
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResults = validateForm(transfer);
    setErrors(formValidationResults.errors);
    onTrannsfer(transfer);
    if (formValidationResults.succeeded) {
      onTrannsfer(transfer);
    }
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
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Seleccione cuenta origen</label>
            <select
              name="accountId"
              onChange={handleFieldChange}
              value={transfer.accountId}
              className={classes.large}
            >
              {accountList.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
              <option value="">Seleccione una cuenta</option>
            </select>
            <p className={classes.error}>{errors.accountId}</p>
          </div>
          <div>
            <label htmlFor="destinationIban">Ingrese IBAN de destino</label>
            <input
              type="text"
              name="iban"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.iban}</p>
          </div>
          <div>
            <label htmlFor="name">Beneficiario</label>
            <input
              type="text"
              name="name"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
          <div>
            <label htmlFor="amount">
              Importe <span>(EUR)</span>
            </label>
            <input
              type="number"
              name="amount"
              onChange={handleFieldChange}
              className={classes.small}
            />
            <p className={classes.error}>{errors.amount}</p>
          </div>
          <div>
            <label htmlFor="concept">Concepto</label>
            <input
              type="text"
              name="concept"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.concept}</p>
          </div>
          <div>
            <label htmlFor="notes">Obervaciones</label>
            <input
              type="text"
              name="notes"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.notes}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
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
            <p className={classes.error}>{errors.realDateTransfer}</p>
          </div>
        </div>
        <div className={classes.formContainer}>
          <div>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              onChange={handleFieldChange}
              className={classes.large}
            />
            <p className={classes.error}>{errors.email}</p>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button type="submit" className={classes.button}>
            REALIZAR TRANSFERENCIA
          </button>
        </div>
      </form>
    </>
  );
};
