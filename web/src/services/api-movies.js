// login

const getMoviesFromApi = (params) => {
  console.log(params);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(`http://localhost:4000/movies?gender=${params.gender}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  // CAMBIA EL CONTENIDO DE ESTE THEN PARA GESTIONAR LA RESPUESTA DEL SERVIDOR Y RETORNAR AL COMPONENTE APP LO QUE NECESITA
  // return {
  //   success: true,
  //   movies: [
  //     {
  //       id: "1",
  //       title: "Gambita de dama",
  //       gender: "Drama",
  //       image:
  //         "//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg",
  //     },
  //     {
  //       id: "2",
  //       title: "Friends",
  //       gender: "Comedia",
  //       image:
  //         "//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/friends.jpg",
  //     },
  //   ],
  // };
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
