import { Navigation }from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('PokeApp.Dashboard', () => require('./pokemons/screens/Dashboard').default);
    Navigation.registerComponent('PokeApp.AddPokemon', () => require('./pokemons/screens/AddPokemon').default);
    Navigation.registerComponent('PokeApp.PokemonView', () => require('./pokemons/screens/PokemonView').default);
}