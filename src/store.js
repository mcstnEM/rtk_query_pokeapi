import { configureStore } from "@reduxjs/toolkit";
import { pokeapi } from "./services/pokeapi";

export const store = configureStore({
    reducer: {
        [pokeapi.reducerPath]: pokeapi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokeapi.middleware),
})