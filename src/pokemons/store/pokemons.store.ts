
import {createStore} from 'redux';
import { Pokemon } from '../../types/pokemonTypes';
import { pokemonsReducer } from './pokemons.reducer';

export interface PokemonsStore {
    pokemons: Pokemon[]
}

export const store: PokemonsStore = createStore(pokemonsReducer)