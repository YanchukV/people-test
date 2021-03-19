import axios from "axios";

const url = "https://swapi.dev/api";

const api =  {
  app: {
    getPeople: () => axios.get(`${url}/people`),
  }
};

export default api;