export interface Pokemon {
    id: number,
    name: string,
    img: string
}

export interface PokemonFull extends Pokemon{
    types: { type: { name: string } }[],
    weight: number
}

export interface PokemonHash {
    [key: number]: string
}

export interface PokemonsStore {
    pokemons: Pokemon[],
    hash: PokemonHash
}

