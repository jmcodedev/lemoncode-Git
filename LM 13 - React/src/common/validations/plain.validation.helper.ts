import { REQUIRED_FIELD_MESSAGE } from "./validation.const";
import { FieldValidationResult } from "./validation.model";

export const buildValidationFailedResult = (
  errorMessage: string
): FieldValidationResult => {
  return {
    succeeded: false,
    errorMessage,
  };
};

export const buildValidationSuccededResult = (): FieldValidationResult => {
  return {
    succeeded: true,
    errorMessage: "",
  };
};

export const buildRequiredFieldValidationFailedResponse = () =>
  buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);
