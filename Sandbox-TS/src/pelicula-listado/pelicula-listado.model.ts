export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  description: string;
  cover_url: string;
}

export interface CrearBotonParams {
  texto: string;
  id: string;
  nombreClase: string;
  onClick: (id: string) => void;
}
