import { Pokemon } from "../../types/pokemonTypes";
import * as actionTypes from './pokemons.actionTypes';
import * as apiClient from './pokemons.api';
import { store } from './pokemons.store';

// Fetch user's pokemons from the server
export const fetchPokemons = async () => {
    store.dispatch({
        type: actionTypes.SET_POKEMONS,
        payload: await apiClient.getUserPokemons()
    })
}

// Add pokemon to the user's pokemons
export const addPokemon = async (pokemonId?: number) => {
    let newPokemon: Pokemon | undefined;
    console.log("pokemonId: " + pokemonId)
    if (pokemonId) {
        newPokemon = await apiClient.getPokemon(pokemonId, true);
    }
    while (!newPokemon) {
        newPokemon = await apiClient.getRandomPokemon();
        if (store.getState().pokemons.find(pokemon => pokemon.id === newPokemon?.id)) {
            newPokemon = undefined;
        }
    }
    apiClient.addPokemon(newPokemon);
    store.dispatch({
        type: actionTypes.ADD_POKEMON,
        payload: newPokemon
    })
}

// Delete a pokemon from the user's pokemons
export const deletePokemon = async (pokemonId: number) => {
    apiClient.deletePokemon(pokemonId);
    store.dispatch({
        type: actionTypes.DELETE_POKEMON,
        payload: pokemonId
    })
}

// Reset pokemons list
export const resetPokemons = () => {
    store.dispatch({
        type: actionTypes.RESET_POKEMONS
    })
}

