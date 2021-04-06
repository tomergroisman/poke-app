describe('All  pokemon handling tests', () => {
    
    let handler, allPokemons;

    beforeAll(() => {
        handler = require('./allPokemonHandler');
    })

    afterEach(() => {
        allPokemons = require('./allPokemons.json')
    });

    it('Should return all the pokemons', () => {
        allPokemons = require('./allPokemons.json')
        expect(handler.getAllPokemons()).toStrictEqual(allPokemons)
    })

    it('Should return filtered list of pokemons', () => {
        expect(handler.filterPokemons("mew")).toStrictEqual([
            {
                "name": "mewtwo",
                "url": "https://pokeapi.co/api/v2/pokemon/150/"
            },
            {
                "name": "mew",
                "url": "https://pokeapi.co/api/v2/pokemon/151/"
            }
        ])
    })

});