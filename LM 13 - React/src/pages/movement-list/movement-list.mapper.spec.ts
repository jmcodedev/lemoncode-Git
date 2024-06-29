import * as apiModel from "./api";
import {
  mapMovementListFromApiToVm,
  mapMovementAcountFromApiToVm,
} from "./movement-list.mapper";

describe("pages/movement-list/movement-list.mapper specs", () => {
  describe("mapMovementListFromApiToVm", () => {
    it("should return empty array when it feeds empty array", () => {
      // Arrange
      const movementList: apiModel.Movement[] = [];
      // Act
      const result = mapMovementListFromApiToVm(movementList);
      // Assert
      expect(result).toEqual([]);
    });
    it("should return the same array but using VM model structure", () => {
      // Arrange
      const movementList: apiModel.Movement[] = [
        {
          id: "1",
          description: "Test",
          amount: 100,
          balance: 100,
          transaction: "2021-01-01T00:00:00",
          realTransaction: "2021-01-01T00:00:00",
          accountId: "1",
        },
        {
          id: "2",
          description: "Test 2",
          amount: 200,
          balance: 300,
          transaction: "2021-01-02T00:00:00",
          realTransaction: "2021-01-02T00:00:00",
          accountId: "2",
        },
      ];
      // Act
      const result = mapMovementListFromApiToVm(movementList);
      // Assert
      expect(result).toEqual([
        {
          id: "1",
          description: "Test",
          amount: "100",
          balance: "100",
          transaction: new Date("2021-01-01T00:00:00"),
          realTransaction: new Date("2021-01-01T00:00:00"),
          accountId: "1",
        },
        {
          id: "2",
          description: "Test 2",
          amount: "200",
          balance: "300",
          transaction: new Date("2021-01-02T00:00:00"),
          realTransaction: new Date("2021-01-02T00:00:00"),
          accountId: "2",
        },
      ]);
    });
    describe("mapMovementAcountFromApiToVm", () => {
      it("should return empty object when it feeds empty object", () => {
        // Arrange
        const account: apiModel.Account = {
          id: "",
          iban: "",
          type: "",
          name: "",
          balance: 0,
          lastTransaction: "",
        };
        // Act
        const result = mapMovementAcountFromApiToVm(account);
        // Assert
        expect(result).toEqual({
          id: "",
          iban: "",
          name: "",
          balance: "0",
        });
      });
      it("should return the same object but using VM model structure", () => {
        // Arrange
        const account: apiModel.Account = {
          id: "1",
          iban: "ES91 2100 0418 4502 0005 1332",
          type: "1",
          name: "Gastos mes",
          balance: 1490,
          lastTransaction: "2019-12-09T21:30:00",
        };
        // Act
        const result = mapMovementAcountFromApiToVm(account);
        // Assert
        expect(result).toEqual({
          id: "1",
          iban: "ES91 2100 0418 4502 0005 1332",
          name: "Gastos mes",
          balance: "1490",
        });
      });
    });
  });
});
