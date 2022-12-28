const express = require("express");
const cors = require("cors");

// const movies = require("./data/movies.json");
const Database = require("better-sqlite3");

const db = new Database("./src/data/movies.db", { verbose: console.log });

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
  const query = db.prepare("SELECT * FROM movies");
  const list = query.all();
  //console.log(list);
  const response = {
    success: true,
    movies: list,
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

//sin-up
server.post("/sign-up", (req, res) => {
  console.log(req.body);
  const query = db.prepare("INSERT INTO users (email, password) VALUES (?,?)");
  const result = query.run(req.body.email, req.body.password);
  console.log(result);
  const resultSignUp =  {
      "success": true,
      "userId": result.lastInsertRowid
    }
  res.json(resultSignUp);
 
});

//sin-in
server.post("/sign-in", (req, res) => {
  console.log(req.body);
  const query = db.prepare("SELECT * FROM users WHERE email = ? AND password = ?");
  const result = query.get(req.body.email, req.body.password);
  // if ( result = !undefine {  const resultSignIp =  {
  //   "success": true,
  //   "userId": result.id
  // }
  // console.log(result);
  // res.json(resultSignIp);})
  // else {
  //   result = undefine {  const resultSignIp =  {
  //     "success": false,
  //     "userId": "error tremendo"
  //   }
  //   console.log(result);
  //   res.json(resultSignIp);})
  // }
 
// hacer un if que diga si result es undefine la repuesta sera succes false y un sms error,m pero si result es ok, succes sera true y userid =
});
// una vez logueadas que peliculas te gustan
// server.get("/user/movies", (req, res) => {
//   console.log(req.headers)
//   const query = db.prepare("SELECT * FROM rel_movies_user");
//   const list = query.all();
//   console.log(list);
//   const response = {
//     success: true,
//     movies: list,
//   };
//   res.json(response);
// });
const staticServer = "./src/public-react";
server.use(express.static(staticServer));

const staticServerImages = "./src/public-movies-images";
server.use(express.static(staticServerImages));
