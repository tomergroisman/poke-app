import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import withPokemonProvider from '../../hoc/PokemonProviderWrapper';
import { Pokemon, PokemonsStore } from '../../types/pokemonTypes';
import { ScreenProps } from '../../types/systemTypes';

interface DashboardProps extends ScreenProps {
    pokemons: Pokemon[]
}


class Dashboard extends Component<DashboardProps> {
    // Push screen to the stack
    pushScreen(name: string) {
        Navigation.push(this.props.componentId, {
            component: {
                name 
            }
        })
    }

    // render callback
    render() {
        return (
            <View>
                <Text>Dashboard</Text>
                <Text onPress={() => this.pushScreen("PokeApp.AddPokemon")}>To Add Pokemon</Text>
                <Text onPress={() => this.pushScreen("PokeApp.PokemonView")}>To Pokemon View</Text>
            </View>
        )
    }
}

const mapStateToProps = (state: PokemonsStore) => ({
    pokemons: state.pokemons
});

export default connect(mapStateToProps)(Dashboard);