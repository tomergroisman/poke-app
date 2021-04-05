describe('pokemons.actions tests', () => {
    
    let store, pokemonActions;

    const mockedPokemons = [
        { id: 1, name: "Balbasaur" },
        { id: 2, name: "Charizard" },
        { id: 3, name: "Muk" }
    ];

    const mockedRandomPokemon = { id: 0, name: "Meu" };

    beforeEach(() => {
        jest.mock('./pokemons.store.ts');
        store = require('./pokemons.store.ts');

        jest.mock('./pokemons.api', () => ({
            getPokemons: jest.fn().mockResolvedValue(mockedPokemons),
            getRandomPokemon: jest.fn().mockResolvedValue(mockedRandomPokemon),
            addPokemon: jest.fn()
        }))

        pokemonActions = require('./pokemons.actions');
    });

    it("Should return a store action object with fetched pokemons", async () => {
        await pokemonActions.fetchPokemons();
        expect(store.store.dispatch.mock.calls[0][0]).toStrictEqual({
            type: "SET_POKEMONS",
            payload: mockedPokemons
        });
    });

    it("Should add a random pokemon", async () => {
        await pokemonActions.addPokemon();
        expect(store.store.dispatch.mock.calls[0][0]).toStrictEqual({
            type: "ADD_POKEMON",
            payload: mockedRandomPokemon
        });
    });

})
