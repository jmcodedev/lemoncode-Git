import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { AccountVm, MovementVm } from "./movement-list.vm";
import {
  mapAccountDetailListFormApiToVm,
  mapMovementListFromApiToVm,
} from "./movement-list.mapper";
import { useParams } from "react-router-dom";
import { getMovements, getAccountDetails } from "./api";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const { id } = useParams() as { id: string };
  const [accountDetails, setAccountDetails] = React.useState<AccountVm>();

  React.useEffect(() => {
    getMovements(id).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
    );
  }, []);

  React.useEffect(() => {
    getAccountDetails(id).then((result) =>
      setAccountDetails(mapAccountDetailListFormApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <span className={classes.balanceContainer}>
            <h4>SALDO DISPONIBLE</h4>
            <h2>{accountDetails?.balance} €</h2>
          </span>
        </div>
        <div className={classes.accountDetail}>
          <span>Alias: {accountDetails?.name}</span>

          <span>IBAN: {accountDetails?.iban}</span>
        </div>
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
