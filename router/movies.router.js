import express from "express";
const router = express.Router();
import {
  getMovies,
  getMovieById,
  updateMovieById,
  createMovies,
  deleteMovieById,
} from "../service/movies.service.js";

router.get("/", async function (request, response) {
  const movies = await getMovies();
  // console.log(movies) // it returns cursor -> pagination(20 at a time)
  // to solve cursor convert it to array as toArray()
  response.send(movies); // express converts object to json in server
});

///////////////////////////// DAY-41 ///////////////////////////////////////

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  console.log(id);
  // const movie = movies.find((movie) => movie.id == id);
  // db.movies.findOne({})
  const movie = await getMovieById(id);
  movie
    ? response.send(movie)
    : response.status(404).send("Movie not available");
});

router.put("/:id", express.json(), async (request, response) => {
  const { id } = request.params;
  const data = request.body;
  const result = await updateMovieById(id, data);
  response.send(result);
});

// express.json() = middleware
router.post("/", express.json(), async (request, response) => {
  const data = request.body;
  // console.log(data);
  const result = await createMovies(data);
  response.send(result);
});

router.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const result = await deleteMovieById(id);
  // to show user movie is deleted when clicking deleted movie again
  result.deletedCount >= 1
    ? response.send({ message: "Movie deleted successfully" })
    : response.status(404).send({ message: "Movie already deleted" });
});

export default router;
