import { Navigation }from 'react-native-navigation';
import withProvider from './hoc/ProviderWrapper';
import { store as pokemonStore } from './pokemons/store/pokemons.store';

// Register app screens
export function registerScreens() {

    Navigation.registerComponent('PokeApp.Dashboard', () => {
        const Dashboard = require('./pokemons/screens/Dashboard').default
        return withProvider(Dashboard, pokemonStore);
    });
    Navigation.registerComponent('PokeApp.AddPokemon', () => require('./pokemons/screens/AddPokemon').default);
    Navigation.registerComponent('PokeApp.PokemonView', () => require('./pokemons/screens/PokemonView').default);

}