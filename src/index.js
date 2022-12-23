const express = require("express");
const cors = require("cors");

// const movies = require("./data/movies.json");
const Database = require ('better-sqlite3');

const db = new Database('./src/data/movies.db', {verbose:console.log});



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

// server.get("/movies", (req, res) => {
//   const response = {
//     success: true,
//     movies: movies,
//   };
//   res.json(response);
// });
server.get("/movies", (req, res) => {
  const query = db.prepare('SELECT * FROM movies');
  const list = query.all();
  console.log(list);
  const response = {
        success: true,
        movies: list
      };
      res.json(response);
    });





// server.get("/movie/:movieId", (req, res) => {
//   console.log(req.params);
//   console.log("holiiiis");
//   const findMovie = movies.find((movie) => movie.id === req.params.movieId);
//   console.log(findMovie);
//   res.json({}); //html
// });

const staticServer = "./src/public-react";
server.use(express.static(staticServer));

const staticServerImages = "./src/public-movies-images";
server.use(express.static(staticServerImages));
