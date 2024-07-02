import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account.page.module.css";
import { AccountForm } from "./components/account-form.component";
import { AccountVm } from "./account.vm";
import { saveAccount } from "./api";
import { mapAccountFromToApi } from "./account.mapper";

export const AccountPage: React.FC = () => {
  const handleCreate = (account: AccountVm) => {
    const accountApi = mapAccountFromToApi(account);
    saveAccount(accountApi).then((result) => {
      if (result) {
        alert("Cuenta creada con éxito");
      } else {
        alert("Error al crear la cuenta");
      }
    });
  };
  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>

        <AccountForm onCreateAccount={handleCreate} />
      </div>
    </AppLayout>
  );
};
