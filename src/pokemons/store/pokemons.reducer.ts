import { Pokemon, PokemonHash, PokemonsStore } from "../../types/pokemonTypes"

type Payload = Pokemon[] | Pokemon

const initialState: PokemonsStore = {
    pokemons: [],
    hash: {}
}

export function pokemonsReducer(state: PokemonsStore = initialState, { type, payload }: { type: string, payload?: Payload }) {
    switch (type) {

        case 'SET_POKEMONS':
            if (Array.isArray(payload)) {
                let pokemons: Pokemon[] = []
                let hash: PokemonHash = {};
                payload.forEach(pokemon => {
                    pokemons.push(pokemon);
                    hash[pokemon.id] = pokemon.name
                })

                return {
                    ...state,
                    pokemons,
                    hash
                }
            }

        case 'ADD_POKEMON':
            if (payload && !Array.isArray(payload)) {
                return {
                    ...state,
                    pokemons:[ ...state.pokemons, payload],
                    hash: Object.assign({}, state.hash, { [payload.id]: payload.name})
                }
            }

        case 'RESET_POKEMONS':
            return initialState

        default:
            return state
    }
}
