export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
};
export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAcoount: "/edit-account/:id",
  movements: "/movements/:id",
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
