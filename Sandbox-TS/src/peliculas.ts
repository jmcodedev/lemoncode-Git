import axios, {AxiosError} from "axios";
import { Movie } from "./model";

const API_URL = "http://localhost:3000/movies";

export const leePeliculas = () : Promise<Movie[]> => {
    const promise = new Promise<Movie[]>((resolve, reject) => {
        axios.get(API_URL)
            .then(response => resolve(response.data))
            .catch((error: AxiosError) => {
                switch (error.response?.status) {
                    case 404:
                        reject("No se encontraron películas");
                        break;
                    case 403:
                        reject("Acceso denegado");
                        break;
                    case 500:
                        reject("Error en el servidor");
                        break;
                    case 503:
                        reject("Servicio no disponible");
                        break;
                    default:
                        reject("Error al obtener las películas");
                        break;
                }
            });
    });

    return promise;
}