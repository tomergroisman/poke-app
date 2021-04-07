describe('Pokemon reducer tests', () => {
    
    const mockedPokemons = [
        {
            "name": "Dodrio",
            "id": 85,
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
        },
        {
            "name": "Charizard",
            "id": 6,
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        }
    ];

    let store;

    beforeEach(() => {
        store = require('./pokemons.store');
        store.store.dispatch({
            type: "SET_POKEMONS",
            payload: mockedPokemons
        })
    });

    it('Should delete an element from the array', () => {
        store.store.dispatch({
            type: "DELETE_POKEMON",
            payload: 6
        });
        console.log(store.store.getState())
        expect(store.store.getState()).toStrictEqual({
            pokemons: [
                {
                    "name": "Dodrio",
                    "id": 85,
                    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
                }
            ],
            hash: {
                85: "Dodrio"
            }
        })
    })

})
