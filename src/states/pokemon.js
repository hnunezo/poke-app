import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wild: {},
  team: [],
  pokedex: [],
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
      console.log(action.payload);
      state.team.push(action.payload);
    },
    addPokedex: (state, action) => {
      state.pokedex.push(action.payload);
    },
  },
});

export const { reset, setWild, addTeam, addPokedex } = pokemonSlice.actions;
export default pokemonSlice.reducer;
