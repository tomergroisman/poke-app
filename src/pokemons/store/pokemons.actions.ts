import { Pokemon } from "../../types/pokemonTypes";
import * as actionTypes from './pokemon.actionTypes';
import { store } from './pokemons.store';

const serverPokemons: Pokemon[] = [
    { id: 1, name: "Balbasaur" },
    { id: 2, name: "Charizard" },
    { id: 3, name: "Muk" }
]

export const fetchPokemons = async () => {
    store.dispatch({
        type: actionTypes.SET_POKEMONS,
        payload: serverPokemons
    })
}