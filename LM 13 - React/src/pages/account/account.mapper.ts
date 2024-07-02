import * as apiModel from "./api";
import * as viewModel from "./account.vm";
export const mapAccountFromToApi = (
  account: viewModel.AccountVm
): apiModel.Account => ({
  id: "",
  iban: "",
  name: account.name,
  type: account.type,
  lastTransaction: "",
  balance: 0,
});
