// login

const getMoviesFromApi = (params) => {
  console.log(params.gender);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(`http://localhost:4000/movies`, {
    method: "GET",
  })
  //filtro genero ?gender=${params.gender}
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    
    }).catch ( (error) => {
      console.log(error)
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
