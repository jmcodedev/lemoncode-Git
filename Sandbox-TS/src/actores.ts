import Axios, { AxiosError } from "axios";
import { Actor } from "./model";
import axios from "axios";

const API_URL = "http://localhost:3000/actors";

export const leeActores = (): Promise<Actor[]> => {

    const promise = new Promise<Actor[]> ((resolve, reject) => {
        axios.get(API_URL)
        .then(response => resolve(response.data))
        .catch((error: AxiosError) => {
            switch (error.response?.status) {
                case 404:
                    reject("No se encontraron actores");
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
                    reject("Error al obtener los actores");
                    break;
            }
        });
    });

    return promise;

};