import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modal: false,
  canvas: false,
  pokedexshow: false,
};
export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    reset: () => initialState,
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    openCanvas: (state) => {
      state.canvas = true;
    },

    closeCanvas: (state) => {
      state.canvas = false;
    },
    setPokedexShow: (state, action) => {
      state.pokedexshow = action.payload;
    },
  },
});

export const { reset, setModal, openCanvas, closeCanvas, setPokedexShow } =
  pageSlice.actions;
export default pageSlice.reducer;
