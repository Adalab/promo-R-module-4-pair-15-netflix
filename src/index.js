const express = require("express");
const cors = require("cors");

const movies = require("./data/movies.json");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
console.log("holita");

server.get("/movies", (req, res) => {
  const response = {
    success: true,
    movies: movies,
  };
  res.json(response);
});

server.get("/movie/:movieId", (req, res) => {
  console.log(req.params);
  console.log("holiiiis");
  const findMovie = movies.find((movie) => movie.id === req.params.movieId);
  console.log(findMovie);
  res.json({}); //html
});

const staticServer = "./src/public-react";
server.use(express.static(staticServer));

const staticServerImages = "./src/public-movies-images";
server.use(express.static(staticServerImages));
