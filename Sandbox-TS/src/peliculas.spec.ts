import { leePeliculas } from "./peliculas";
import { vi } from "vitest";
import Axios, { AxiosError } from "axios";
import { Movie } from "./model";

describe("leePeliculas", () => {
  it("should return a list of movies", async () => {
    // Arrange

    const peliculasMock: Movie[] = [
      {
        id: "1",
        title: "Iron Man",
        year: 2008,
        director: "Jon Favreau",
        description:
          "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        actors: ["1", "2", "3"],
        cover_url:
          "https://raw.githubusercontent.com/Lemoncode/bootcamp-js-2/main/10-async/03-server-peliculas/assets/movies/iron-man.webp",
      },
    ];

    const axiosGetMock = vi.spyOn(Axios, "get").mockResolvedValue({
      data: peliculasMock,
    });

    // Act

    const result = await leePeliculas();

    // Assert

    expect(result).toEqual(peliculasMock);
  });

  it("should return an error message when the server returns a 403 status code", async () => {
    // Arrange
    vi.spyOn(Axios, "get").mockRejectedValue({
      response: {
        status: 403,
      },
    });
    // Act
    try {
      await leePeliculas();
    } catch (error) {
      // Assert
      expect(error).toEqual("Acceso denegado");
    }
  });
  it("should return an error message when the server returns a 503 status code", async () => {
    // Arrange
    vi.spyOn(Axios, "get").mockRejectedValue({
      response: {
        status: 503,
      },
    });
    // Act
    try {
      await leePeliculas();
    } catch (error) {
      // Assert
      expect(error).toEqual("Servicio no disponible");
    }
  });
});

