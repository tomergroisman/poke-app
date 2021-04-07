export interface Pokemon {
    id: number,
    name: string,
    img: string
}

export interface PokemonFull extends Omit<Pokemon, "img">{
    types: { type: { name: string } }[],
    weight: number,
    sprites: {
        back_default: string,
        front_default: string
    },
    base_experience: number,
    stats: { base_stat: number, stat: { name: string } }[]
}

export interface PokemonHash {
    [key: number]: string
}

export interface PokemonsStore {
    pokemons: Pokemon[],
    hash: PokemonHash
}

