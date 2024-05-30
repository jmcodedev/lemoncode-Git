import { Actor } from "./model";
import { leeActores } from "./actores";
import Axios, { AxiosError } from "axios";
import { vi } from "vitest";

describe("leeActores", () => {
  it("Debe devolver un array de actores al consultar la API", async () => {
    // Arrange

    const actoresMock: Actor[] = [
      {
        id: "1",
        name: "Robert Downey Jr.",
        movies: ["1", "3", "6", "7", "22"],
        bio: "Robert Downey Jr. is an American actor. He is best known for his role as Tony Stark/Iron Man in the Marvel Cinematic Universe.",
        image:
          "https://raw.githubusercontent.com/Lemoncode/bootcamp-js-2/main/10-async/03-server-peliculas/assets/actors/robert-downey-jr.webp",
      },
    ];

    const axiosGetMock = vi.spyOn(Axios, "get").mockResolvedValue({
      data: actoresMock,
    });

    // Act

    const result = await leeActores();

    // Assert

    expect(result).toEqual(actoresMock);
  });
  it("Debería devolver el texto del error 403", async () => {
    // Arrange

    vi.spyOn(Axios, "get").mockRejectedValue({
      response: {
        status: 403,
      },
    });

    // Act

    try {
      const result = await leeActores();
    } catch (error) {
      // Assert
      expect(error).toEqual("Acceso denegado");
    }
  });
  it("Debería devolver el texto del error 404", async () => {
    // Arrange

    vi.spyOn(Axios, "get").mockRejectedValue({
      response: {
        status: 404,
      },
    });

    // Act

    try {
      const result = await leeActores();
    } catch (error) {
      // Assert
      expect(error).toEqual("No se encontraron actores");
    }
  });
});
