import * as apiModel from "./api";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount.toString(),
    balance: movement.balance.toString(),
    transaction: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
    accountId: movement.accountId,
  }));

export const mapAccountDetailListFormApiToVm = (
  account: apiModel.Account
): viewModel.AccountVm => ({
  id: account.id,
  iban: account.iban,
  name: account.name,
  balance: account.balance,
});
