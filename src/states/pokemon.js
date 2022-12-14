import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wild: {},
  team: [],
  pokedex: [],
  pc: [],
  selectedModal: {},
};
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    reset: () => initialState,
    setWild: (state, action) => {
      state.wild = action.payload;
    },
    addTeam: (state, action) => {
      state.team.push(action.payload);
    },
    deletePokemonTeam: (state, action) => {
      state.team = state.team.filter((el) => el.id !== action.payload);
    },
    addPokedex: (state, action) => {
      state.pokedex = action.payload;
    },
    setSelectedPokemon: (state, action) => {
      state.selectedModal = action.payload;
    },
    setPc: (state, action) => {
      state.pc = action.payload;
    },
  },
});

export const {
  reset,
  setWild,
  addTeam,
  addPokedex,
  deletePokemonTeam,
  setSelectedPokemon,
  setPc,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
