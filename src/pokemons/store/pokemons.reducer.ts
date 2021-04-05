import { Pokemon, PokemonsStore } from "../../types/pokemonTypes"

type Payload = Pokemon[] | Pokemon

const initialState: PokemonsStore = {
    pokemons: [],
}

export function pokemonsReducer(state: PokemonsStore = initialState, { type, payload }: { type: string, payload: Payload }) {
    switch (type) {

        case 'SET_POKEMONS':
            if (Array.isArray(payload)) {
                return {
                    ...state,
                    pokemons:[...payload]
                }
            }

        case 'ADD_POKEMON':
            if (!Array.isArray(payload)) {
                return {
                    ...state,
                    pokemons:[ ...state.pokemons, payload]
                }
            }

        default:
            return state
    }
}
