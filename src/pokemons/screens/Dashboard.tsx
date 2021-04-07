import React, { Component } from 'react';
import { View, Button, Text } from 'react-native-ui-lib';
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
    
    // Pokemon press handler
    onPokemonPress = (pokemonId: number) => {
        presenter.pushViewScreen(this.props.componentId, pokemonId)
    }

    // Pokemon delete handler
    onDeletePokemonPress = (pokemonId: number) => {
        pokemonsActions.deletePokemon(pokemonId)
    }

    // componentDidMount callback
    componentDidMount() {
        pokemonsActions.fetchPokemons();
    }

    // render callback
    render() {
        return (
            <View padding-s6 paddingT-s10 flex>
                <Text center text30L black marginB-s5>Your Team</Text>
                <View flexS>
                    <PokemonsList
                        pokemons={this.props.pokemons}
                        onPokemonPress={this.onPokemonPress}
                        useDisable={false}
                        deletable
                    />
                </View>
                <View flexG bottom>
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