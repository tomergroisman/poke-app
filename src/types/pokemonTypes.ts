export interface Pokemon {
    id: number,
    name: string,
    img: string
}

export interface PokemonHash {
    [key: number]: string
}

export interface PokemonsStore {
    pokemons: Pokemon[],
    hash: PokemonHash
}

