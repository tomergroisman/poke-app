import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { View, Button } from 'react-native-ui-lib';
import { connect } from 'react-redux';
import { Pokemon, PokemonsStore } from '../../types/pokemonTypes';
import { ScreenProps } from '../../types/systemTypes';
import * as pokemonsActions from '../store/pokemons.actions';
import PokemonsList from '../components/PokemonsList';

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

    // componentDidMount callback
    componentDidMount() {
        pokemonsActions.fetchPokemons();
    }

    // render callback
    render() {
        return (
            <View padding-s10 flex>
                <View flex-6>
                    <PokemonsList
                        pokemons={this.props.pokemons}
                        onPokemonPress={this.pushScreen.bind(this, "PokeApp.PokemonView")}
                        useDisable={false}
                    />
                </View>
                <View flex bottom>
                    <Button
                        text70BO
                        white
                        background-green30
                        label="Add Pokemon"
                        onPress={this.pushScreen.bind(this, "PokeApp.AddPokemon")}
                        margin-s6
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: PokemonsStore) => ({
    pokemons: state.pokemons,
});

export default connect(mapStateToProps)(Dashboard);