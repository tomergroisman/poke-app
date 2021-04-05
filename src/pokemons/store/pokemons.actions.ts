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
    let newPokemon = pokemon;
    while (!newPokemon) {
        newPokemon = await apiClient.getRandomPokemon();
        if (store.getState().pokemons.find(pokemon => pokemon.id === newPokemon?.id)) {
            newPokemon = undefined;
        }
    }
    store.dispatch({
        type: actionTypes.ADD_POKEMON,
        payload: newPokemon
    })
}

export const resetPokemons = () => {
    store.dispatch({
        type: actionTypes.RESET_POKEMONS
    })
}