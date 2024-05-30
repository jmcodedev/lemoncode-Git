export interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  description: string;
  actors: string[];
  cover_url: string;
}

export interface Actor {
  id: string;
  name: string;
  movies: string[];
  bio: string;
  image: string;
}
