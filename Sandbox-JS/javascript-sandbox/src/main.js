import "./style.css";
import Axios from "axios";
const __MOVIE_ENDPOINT__ = "http://localhost:3000/movies";
const __ACTORS_ENDPOINT__ = "http://localhost:3000/actors";

const actorActualizado = {
  id: "28",
  name: "Tom Holland",
  movies: [
    "Captain America: Civil War",
    "Spider-Man: Homecoming",
    "Avengers: Infinity War",
    "Avengers: Endgame",
    "Spider-Man: Far From Home",
  ],
  bio: "Thomas Stanley Holland is an English actor. A graduate of the BRIT School in London, he began his acting career on stage in the title role of Billy Elliot the Musical in the West End from 2008 to 2010. ACTUALIZADO 2222",
  image: "https://example.com/tom-holland2.jpg ",
};

const actualizarActor = (actor) => {
  // try {
  //   const response = await Axios.put(
  //     `${__ACTORS_ENDPOINT__}/${actor.id}`,
  //     actor
  //   );
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);

  //   Axios.put(`${__ACTORS_ENDPOINT__}/${actor.id}`, actor)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  fetch(`${__ACTORS_ENDPOINT__}/${actor.id}`, {
    method: "PUT",
    body: JSON.stringify(actor),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        response.json();
      } else throw new Error("Error en al conexión con la API");
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(`Se produjo el error:${error}}`));
};

actualizarActor(actorActualizado);
