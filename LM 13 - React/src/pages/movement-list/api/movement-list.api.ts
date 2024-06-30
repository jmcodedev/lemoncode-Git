import Axios from "axios";
import { Account, Movement } from "./movements.api-model";
import { AccountVm } from "../movement-list.vm";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

export const getAccountDetails = (): Promise<Account> =>
  Axios.get<Account>(`http://localhost:3000/account-list?id=1`).then(
    ({ data }) => data
  );

export const createEmptyAccount = (): AccountVm => ({
  id: "Empty",
  iban: "Empty",
  name: "Empty",
  balance: 0,
});
