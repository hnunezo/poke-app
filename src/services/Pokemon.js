import axios from "axios";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon";
const desUrl = "https://pokeapi.co/api/v2/pokemon-species";

const getPokemon = (id) => {
  const request = axios.get(`${pokemonUrl}/${id}`);
  return request.then((response) => response.data);
};

const getDescription = (id) => {
  const request = axios.get(`${desUrl}/${id}`);
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPokemon, getDescription };
