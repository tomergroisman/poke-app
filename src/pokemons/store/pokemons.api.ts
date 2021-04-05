import { Pokemon } from "../../types/pokemonTypes";

const API_ENDPOINT: string = "https://pokeapi.co/api/v2/pokemon";
const POKEMON_API_ENDPOINT: string = "https://pokeapi.co/api/v2/pokemon";
const lastPokemon: number = 151;

const serverPokemons: Pokemon[] = [
    { id: 1, name: "Balbasaur" },
    { id: 2, name: "Charizard" },
    { id: 3, name: "Muk" }
]

// Get all user's pokemon from the server
export function getPokemons(): Promise<Pokemon[]> {
    return Promise.resolve(serverPokemons)
}

// Get a random 1st generation pokemon
export function getRandomPokemon(): Promise<Pokemon> {
    const randomNum: number = Math.ceil(Math.random() * lastPokemon)
    return fetch(POKEMON_API_ENDPOINT + `/${randomNum}`).then(res => res.json()).then(pokemon => pokemon.name)
}

// Add a pokemon to the user's pokemons list on the server
export function addPokemon(): Promise<void> {
    return Promise.resolve()
}