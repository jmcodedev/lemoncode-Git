import { AppLayout } from "@/layouts";
import React, { useState, useEffect } from "react";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import classes from "./transfer.page.module.css";

const accountListMock: AccountVm[] = [
  { id: "1", alias: "Cuenta principal", iban: "ES91 2100 0418 4502 0005 1332" },
  { id: "2", alias: "Cuenta ahorro", iban: "ES91 2100 0418 4502 0005 1332" },
  { id: "3", alias: "Cuenta nómina", iban: "ES91 2100 0418 4502 0005 1332" },
];

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = useState<AccountVm[]>([]);
  useEffect(() => {
    setAccountList(accountListMock);
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    console.log(transferInfo);
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Transferencias nacionales</h1>
        <TransferFormComponent
          accountList={accountList}
          onTrannsfer={handleTransfer}
        />
      </div>
    </AppLayout>
  );
};
