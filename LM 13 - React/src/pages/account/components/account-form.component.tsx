import React from "react";
import classes from "./account-form.component.module.css";
import { AccountVm, createEmptyAccount } from "../account.vm";
interface Props {
  onCreateAccount: (account: AccountVm) => void;
}
export const AccountForm: React.FC<Props> = (props) => {
  const { onCreateAccount } = props;
  const [account, setAccount] = React.useState<AccountVm>(createEmptyAccount());
  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreateAccount(account);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label htmlFor="type">Tipo de cuenta:</label>
            <select
              name="type"
              onChange={handleFieldChange}
              className={classes.large}
            >
              <option>Seleccionar</option>
              <option key="1">Gastos mes</option>
              <option key="2">Ahorro</option>
              <option key="3">Compartida</option>
            </select>
          </div>

          <div>
            <label htmlFor="name">Alias:</label>
            <input
              type="text"
              name="name"
              onChange={handleFieldChange}
              className={classes.small}
            />
          </div>
        </div>

        <div className={classes.buttonContainer}>
          <button type="submit">GUARDAR</button>
        </div>
      </form>
    </>
  );
};
