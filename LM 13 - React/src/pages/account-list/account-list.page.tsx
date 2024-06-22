import { appRoutes } from "@/core/router";
import React from "react";
import { generatePath, Link } from "react-router-dom";

export const AccountListPage: React.FC = () => {
  return (
    <div>
      Account list
      <br />
      <Link to={generatePath(appRoutes.movements, { id: 1 })}>
        Movimientos de la cuenta 1
      </Link>
      <br />
      <Link to={appRoutes.transfer}>Transferencia</Link>
      <br />
      <Link to={generatePath(appRoutes.transfer, { id: 1 })}>
        Transferencia desde cuenta 1
      </Link>
    </div>
  );
};
