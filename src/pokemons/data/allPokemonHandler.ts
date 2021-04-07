import { Pokemon } from "../../types/pokemonTypes";
import { capitalizeFirst } from '../../helpers/stringManipulations'

const allPokemons: Pokemon[] = require('./allPokemons.json')
    .map((pokemon: Pokemon, i: number) => ({
        ...pokemon,
        name: capitalizeFirst(pokemon.name),
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

