
import {createStore} from 'redux';
import { pokemonsReducer } from './pokemons.reducer';

export const store = createStore(pokemonsReducer)