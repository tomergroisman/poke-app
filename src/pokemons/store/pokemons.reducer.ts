import { Pokemon, PokemonsStore } from "../../types/pokemonTypes"

type Payload = Pokemon[]

const initialState: PokemonsStore = {
    pokemons: [],
}

export function pokemonsReducer(state: PokemonsStore = initialState, { type, payload }: { type: string, payload: Payload }) {
    switch (type) {

        case 'SET_POKEMONS':
            return {
                ...state,
                pokemons:[...payload]
            }

        default:
            return state
    }
}
