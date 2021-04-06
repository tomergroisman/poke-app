import { Pokemon } from "../../types/pokemonTypes";

const API_ENDPOINT: string = "https://pokeapi.co/api/v2/pokemon";
const POKEMON_API_ENDPOINT: string = "https://pokeapi.co/api/v2/pokemon";
const lastPokemon: number = 151;

const serverPokemons: Pokemon[] = [
    { id: 1, name: "Balbasaur", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"},
    { id: 2, name: "Charizard", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"},
    { id: 3, name: "Muk", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
]

// Get all user's pokemon from the server
export function getUserPokemons(): Promise<Pokemon[]> {
    return Promise.resolve(serverPokemons)
}

// Get a random 1st generation pokemon
export function getRandomPokemon(): Promise<Pokemon> {
    const randomNum: number = Math.ceil(Math.random() * lastPokemon);
    return fetch(POKEMON_API_ENDPOINT + `/${randomNum}`)
        .then(res => res.json())
        .then(pokemon => (parseApiPokemon(pokemon)))
}

// Get a specific 1st generation pokemon
export function getPokemon(name: string): Promise<Pokemon> {
    return fetch(POKEMON_API_ENDPOINT + `/${name.toLocaleLowerCase()}`)
        .then(res => res.json())
        .then(pokemon => parseApiPokemon(pokemon))
}

// Add a pokemon to the user's pokemons list on the server
export function addPokemon(): Promise<void> {
    return Promise.resolve()
}

function parseApiPokemon(pokemon: any) {
    return {
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        id: pokemon.id,
        img: pokemon.sprites.front_default
    }
}