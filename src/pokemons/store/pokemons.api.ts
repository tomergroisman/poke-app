import { Pokemon, PokemonFull } from "../../types/pokemonTypes";

const API_ENDPOINT: string = "http://localhost:3000/pokemons";
const POKEMON_API_ENDPOINT: string = "https://pokeapi.co/api/v2/pokemon";
const lastPokemon: number = 151;

// Get all user's pokemon from the server
export function getUserPokemons(): Promise<Pokemon[]> {
    return fetch(API_ENDPOINT)
        .then(res => res.json())
}

// Get a random 1st generation pokemon
export function getRandomPokemon(): Promise<Pokemon> {
    const randomNum: number = Math.ceil(Math.random() * lastPokemon);
    return fetch(POKEMON_API_ENDPOINT + `/${randomNum}`)
        .then(res => res.json())
        .then(pokemon => (parseApiPokemon(pokemon)))
}

// Get a specific 1st generation pokemon
export function getPokemon(id: number): Promise<PokemonFull>;
export function getPokemon(id: number, parse: boolean): Promise<Pokemon>;
export function getPokemon(id: number, parse?: boolean): Promise<Pokemon | PokemonFull> {
    // console.log(id);
    return fetch(POKEMON_API_ENDPOINT + `/${id}`)
        .then(res => res.json())
        .then(pokemon => parse ? parseApiPokemon(pokemon) : pokemon)
}

// Add a pokemon to the user's pokemons list on the server
export function addPokemon(pokemon: Pokemon): Promise<void> {
    return fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pokemon)
        })
        .then()
}

// Delete a pokemon from the user's pokemons list on the server
export function deletePokemon(id: number): Promise<void> {
    return fetch(API_ENDPOINT + `/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then()
}

// Parse a full json api pokemon to Pokemon type
function parseApiPokemon(pokemon: any) {
    return {
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        id: pokemon.id,
        img: pokemon.sprites.front_default
    }
}