import {
  INVALID_AMOUNT_MESSAGE,
  INVALID_EMAIL_MESSAGE,
  REQUIRED_FIELD_MESSAGE,
  validateAccountIdField,
  validateAmountField,
  validateConceptField,
  validateEmailField,
  validateIBANField,
  validateNameField,
  validateNotesField,
} from "./transfer-field.validation";

describe("transfer-field.validation specs", () => {
  describe("validateIBANField", () => {
    it("Should return false when IBAN is empty", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateIBANField(value);
      // Assert
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });

  describe("validateAccoundIdField", () => {
    it("Should return false when account id is empty", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateAccountIdField(value);
      // Assert
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
      expect(result.succeeded).toBeFalsy();
    });

    it("Should return true when account id is informed", () => {
      // Arrange
      const value = "1";
      // Act
      const result = validateAccountIdField(value);
      // Assert
      expect(result.errorMessage).toEqual("");
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateNameField", () => {
    it("Should return false when account id is empty", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateNameField(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("Should return true when account id is informed", () => {
      // Arrange
      const value = "1";
      // Act
      const result = validateNameField(value);
      // Assert
      expect(result.errorMessage).toEqual("");
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateAmountField", () => {
    it("Should return false when amount is negative", () => {
      // Arrange
      const value = -1;
      // Act
      const result = validateAmountField(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE);
    });

    it("Should return false when amount is 0", () => {
      // Arrange
      const value = 0;
      // Act
      const result = validateAmountField(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE);
    });

    it("Should return true when amount is positive", () => {
      // Arrange
      const value = 1;
      // Act
      const result = validateAmountField(value);
      // Assert
      expect(result.errorMessage).toEqual("");
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateConceptField", () => {
    it("Should return false when concept is empty", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateConceptField(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("Should return true when concept is informed", () => {
      // Arrange
      const value = "1";
      // Act
      const result = validateConceptField(value);
      // Assert
      expect(result.errorMessage).toEqual("");
      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateNotesField", () => {
    it("Should return true when notes is empty", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateNotesField(value);
      // Assert
      expect(result.errorMessage).toEqual("");
      expect(result.succeeded).toBeTruthy();
    });
    it("Should return true when notes is informed", () => {
      // Arrange
      const value = "1";
      // Act
      const result = validateNotesField(value);
      // Assert
      expect(result.errorMessage).toEqual("");
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateEmailField", () => {
    it("Should return false when email is empty", () => {
      // Arrange
      const value = "";
      // Act
      const result = validateEmailField(value);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });
    it("Should return false when email is not well formed", () => {
      // Arrange
      const value = "joan@jmcode";
      // Act
      const result = validateEmailField(value);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_EMAIL_MESSAGE);
    });
    it("Should return true when email is well formed", () => {
      // Arrange
      const value = "joan@jmcode.dev";
      // Act
      const result = validateEmailField(value);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
