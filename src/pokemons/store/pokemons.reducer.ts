import { Pokemon } from "../../types/pokemonTypes"
import { PokemonsStore } from "./pokemons.store"

type Payload = Pokemon[]

const initialState: PokemonsStore = {
    pokemons: []
}

export function pokemonsReducer(state: PokemonsStore = initialState, { type, payload }: { type: string, payload: Payload }) {
    switch (type) {

        case 'SET_POKEMONS':
            state.pokemons = payload

        default:
            return state
    }
}
