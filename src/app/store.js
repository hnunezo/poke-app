import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../states/page";
import pokemonReducer from "../states/pokemon";

export default configureStore({
  reducer: { page: pageReducer, pokemon: pokemonReducer },
});
