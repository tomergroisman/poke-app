import { Navigation }from 'react-native-navigation';
import withPokemonProvider from './hoc/PokemonProviderWrapper';

// Register app screens
export function registerScreens() {

    Navigation.registerComponent('PokeApp.Dashboard', () => withPokemonProvider(require('./pokemons/screens/Dashboard').default));
    Navigation.registerComponent('PokeApp.AddPokemon', () => withPokemonProvider(require('./pokemons/screens/AddPokemon').default));
    Navigation.registerComponent('PokeApp.PokemonView', () => withPokemonProvider(require('./pokemons/screens/PokemonView').default));

}