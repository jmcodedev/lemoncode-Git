import Axios from "axios";
import { Account, Movement } from "./movements.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

export const getAccountDetails = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${import.meta.env.VITE_BASE_API_URL}/account-list`, {
    params: { accountId },
  }).then(({ data }) => data);