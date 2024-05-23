import "./style.css";
import Axios from "axios";
const __MOVIE_ENDPOINT__ = "http://localhost:3000/movies";
const __ACTORS_ENDPOINT__ = "http://localhost:3000/actors";

const nuevoActor = {
  name: "Tom Holland",
  movies: [
    "Spiderman: Homecoming",
    "Spiderman: Far from home",
    "Spiderman: No way home",
    "Avengers: Infinity War",
    "Avengers: Endgame",
    "Captain America: Civil War",
  ],
  bio: "Tom Holland is an English actor. He is best known for his role as Spider-Man in the Marvel Cinematic Universe (MCU) films. Holland has also appeared in the disaster film The Impossible (2012), the fantasy drama A Monster Calls (2016), and the war film The Lost City of Z (2016).",
  image: "https://example.com/tom-holland.jpg",
};

const agregarActor = async () => {
  const response = await fetch(__ACTORS_ENDPOINT__, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoActor),
  });

  if (response.ok) {
    const actor = await response.json();
    console.log(actor);
  } else {
    throw new Error("Error en la llamada a la API");
  }
};
try {
  agregarActor(nuevoActor);
} catch (error) {
  console.log("Error: ", error);
}
