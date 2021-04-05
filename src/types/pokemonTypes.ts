export interface Pokemon {
    id: number,
    name: string,
    img: string
}

export interface PokemonsStore {
    pokemons: Pokemon[],
}

