describe('pokemons.actions tests', () => {
    
    let store, pokemonActions;

    const mockedPokemons = [
        { id: 1, name: "Balbasaur", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"},
        { id: 2, name: "Charizard", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"},
        { id: 3, name: "Muk", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
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
        expect(store.store.dispatch).toBeCalledWith({
            type: "SET_POKEMONS",
            payload: mockedPokemons
        });
    });

    it.skip("Should add a random pokemon", async () => {
        await pokemonActions.addPokemon();
        expect(store.store.dispatch).toBeCalledWith({
            type: "ADD_POKEMON",
            payload: mockedRandomPokemon
        });
    });

    it("Should reset pokemons list", async () => {
        pokemonActions.resetPokemons();
        expect(store.store.dispatch).toBeCalledWith({
            type: "RESET_POKEMONS",
        });
    });

})
