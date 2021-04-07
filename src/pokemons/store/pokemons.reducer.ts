import { Pokemon, PokemonHash, PokemonsStore } from "../../types/pokemonTypes"

type Payload = Pokemon[] | Pokemon | number

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
            if (payload && !Array.isArray(payload) && typeof(payload) !== "number") {
                return {
                    ...state,
                    pokemons:[ ...state.pokemons, payload],
                    hash: Object.assign({}, state.hash, { [payload.id]: payload.name})
                }
            }

        case 'DELETE_POKEMON':
            if (typeof(payload) === "number") {
                const idx = state.pokemons.findIndex(pokemon => pokemon.id === payload);
                const pokemons = [ ...state.pokemons ]
                pokemons.splice(idx, 1);

                const hash = Object.assign({}, state.hash);
                delete hash[payload];

                return {
                    ...state,
                    pokemons,
                    hash
                }
            }

        case 'RESET_POKEMONS':
            return initialState

        default:
            return state
    }
}
