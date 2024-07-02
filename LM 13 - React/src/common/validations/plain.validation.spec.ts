import {
  isPositiveNumber,
  isValidIban,
  isEmailWellFormed,
  isValueNotNullOrUndefined,
} from "./plain.validation";
describe("plain.validation", () => {
  describe("isValueNotNullOrUndefined", () => {
    it("should return true when value is not null or undefined", () => {
      // Arrange
      const value = "test";
      // Act
      const result = isValueNotNullOrUndefined(value);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return false when value is null", () => {
      // Arrange
      const value = null;
      // Act
      const result = isValueNotNullOrUndefined(value);
      // Assert
      expect(result).toBeFalsy();
    });
    it("should return false when value is undefined", () => {
      // Arrange
      const value = undefined;
      // Act
      const result = isValueNotNullOrUndefined(value);
      // Assert
      expect(result).toBeFalsy();
    });
  });
  describe("isEmailWellFormed specs", () => {
    it("should return true when email is well formed", () => {
      // Arrange
      const email = "joan@jmcode.dev";
      // Act
      const result = isEmailWellFormed(email);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return false when email is not well formed", () => {
      // Arrange
      const email = "joan@jmcode";
      // Act
      const result = isEmailWellFormed(email);
      // Assert
      expect(result).toBeFalsy();
    });
    it("should return false when email is empty", () => {
      // Arrange
      const email = "";
      // Act
      const result = isEmailWellFormed(email);
      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isPositiveNumber specs", () => {
    it("should return true when amount is valid", () => {
      // Arrange
      const amount = 100;
      // Act
      const result = isPositiveNumber(amount);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return false when amount is invalid", () => {
      // Arrange
      const amount = -100;
      // Act
      const result = isPositiveNumber(amount);
      // Assert
      expect(result).toBeFalsy();
    });
  });
  describe("isValidIban specs", () => {
    it("should return true when iban is valid", () => {
      // Arrange
      const iban = "ES91 2100 0418 4502 0005 1332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return true when iban is formatted with dashes is valid", () => {
      // Arrange
      const iban = "ES91-2100-0418-4502-0005-1332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return true when iban is formatted with no spaces is valid", () => {
      // Arrange
      const iban = "ES9121000418450200051332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });
    it("should return false when iban is invalid", () => {
      // Arrange
      const iban = "ES91 2100 0418 4502 0005 1333";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeFalsy();
    });
    it("should return false when iban is empty", () => {
      // Arrange
      const iban = "";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeFalsy();
    });
  });
});
