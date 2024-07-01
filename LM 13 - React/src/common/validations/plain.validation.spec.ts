// import {
//   isPositiveNumber,
//   isValidIban,
//   isDateAfterToday,
// } from "./plain.validation";
// describe("plain.validation", () => {
//   describe("isDateAfterToday specs", () => {
//     it("should return true when date is after today", () => {
//       // Arrange
//       const date = new Date();
//       date.setDate(date.getDate() + 1);

//       // Act
//       const result = isDateAfterToday(date.toISOString());

//       // Assert
//       expect(result).toBeTruthy();
//     });

//     it("should return false when date is before today", () => {
//       // Arrange
//       const date = new Date();
//       date.setDate(date.getDate() - 1);

//       // Act
//       const result = isDateAfterToday(date.toISOString());

//       // Assert
//       expect(result).toBeFalsy();
//     });

//     it("should return false when date is today", () => {
//       // Arrange
//       const date = new Date();

//       // Act
//       const result = isDateAfterToday(date.toISOString());

//       // Assert
//       expect(result).toBeFalsy();
//     });
//   });

//   describe("isPositiveNumber specs", () => {
//     it("should return true when amount is valid", () => {
//       // Arrange
//       const amount = 100;
//       // Act
//       const result = isPositiveNumber(amount);
//       // Assert
//       expect(result).toBeTruthy();
//     });
//     it("should return false when amount is invalid", () => {
//       // Arrange
//       const amount = -100;
//       // Act
//       const result = isPositiveNumber(amount);
//       // Assert
//       expect(result).toBeFalsy();
//     });
//   });
//   describe("isValidIban specs", () => {
//     it("should return true when iban is valid", () => {
//       // Arrange
//       const iban = "ES91 2100 0418 4502 0005 1332";
//       // Act
//       const result = isValidIban(iban);
//       // Assert
//       expect(result).toBeTruthy();
//     });
//     it("should return true when iban is formatted with dashes is valid", () => {
//       // Arrange
//       const iban = "ES91-2100-0418-4502-0005-1332";
//       // Act
//       const result = isValidIban(iban);
//       // Assert
//       expect(result).toBeTruthy();
//     });
//     it("should return true when iban is formatted with no spaces is valid", () => {
//       // Arrange
//       const iban = "ES9121000418450200051332";
//       // Act
//       const result = isValidIban(iban);
//       // Assert
//       expect(result).toBeTruthy();
//     });
//     it("should return false when iban is invalid", () => {
//       // Arrange
//       const iban = "ES91 2100 0418 4502 0005 1333";
//       // Act
//       const result = isValidIban(iban);
//       // Assert
//       expect(result).toBeFalsy();
//     });
//     it("should return false when iban is empty", () => {
//       // Arrange
//       const iban = "";
//       // Act
//       const result = isValidIban(iban);
//       // Assert
//       expect(result).toBeFalsy();
//     });
//   });
// });
