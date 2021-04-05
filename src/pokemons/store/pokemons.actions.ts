import { Pokemon } from "../../types/pokemonTypes";
import * as actionTypes from './pokemons.actionTypes';
import * as apiClient from './pokemons.api';
import { store } from './pokemons.store';

// Fetch user's pokemons from the server
export const fetchPokemons = async () => {
    store.dispatch({
        type: actionTypes.SET_POKEMONS,
        payload: await apiClient.getPokemons()
    })
}

// Add pokemon to the user's pokemons
export const addPokemon = async (pokemon?: Pokemon) => {
    store.dispatch({
        type: actionTypes.ADD_POKEMON,
        payload: pokemon ? pokemon : await apiClient.getRandomPokemon()
    })
}