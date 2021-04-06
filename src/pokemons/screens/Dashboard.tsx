import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { View, Button } from 'react-native-ui-lib';
import { connect } from 'react-redux';
import { Pokemon, PokemonsStore } from '../../types/pokemonTypes';
import { ScreenProps } from '../../types/systemTypes';
import * as pokemonsActions from '../store/pokemons.actions';
import * as presenter from './Dashboard.presenter';
import PokemonsList from '../components/PokemonsList';

interface DashboardProps extends ScreenProps {
    pokemons: Pokemon[]
}

class Dashboard extends Component<DashboardProps> {
    onPokemonPress = (pokemonId: number) => {
        presenter.pushViewScreen(this.props.componentId, pokemonId)
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
                        onPokemonPress={this.onPokemonPress}
                        useDisable={false}
                    />
                </View>
                <View flex bottom>
                    <Button
                        text70BO
                        white
                        background-green30
                        label="Add Pokemon"
                        onPress={presenter.pushAddModal}
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