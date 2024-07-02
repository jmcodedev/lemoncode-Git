export interface AccountVm {
  type: string;
  name: string;
}

export const createEmptyAccount = (): AccountVm => ({
  name: "",
  type: "",
});
