import { Pokemon } from "../../types/pokemonTypes";

const allPokemons: Pokemon[] = require('./allPokemons.json')
    .map((pokemon: Pokemon, i: number) => ({
        ...pokemon,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        id: i + 1
    }))

// Get all 1st generation pokemons
export const getAllPokemons = () => {
    return allPokemons;
}

// Returns a filtered list of pokemons containing a search term
export const filterPokemons = (term: string) => {
    return allPokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(term.toLowerCase())
    );
}

