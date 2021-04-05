describe('pokemons.actions tests', () => {
    
    let store, pokemonActions, mockedFetch;

    const mockedPokemons = [
        { id: 1, name: "Balbasaur" },
        { id: 2, name: "Charizard" },
        { id: 3, name: "Muk" }
    ];

    beforeEach(() => {
        jest.mock('./pokemons.store.ts');
        store = require('./pokemons.store.ts');

        mockedFetch = jest.fn().mockResolvedValue(mockedPokemons);

        pokemonActions = require('./pokemons.actions');
    });

    it("Should return a store action object with fetched pokemons", () => {
        pokemonActions.fetchPokemons();
        expect(store.store.dispatch.mock.calls[0][0]).toStrictEqual({
                type: "SET_POKEMONS",
                payload: mockedPokemons
        });
    });

})
