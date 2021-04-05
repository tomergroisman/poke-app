import React, { Component } from 'react';
import { Button, View } from 'react-native-ui-lib';
import { connect } from 'react-redux';
import { Pokemon, PokemonsStore } from '../../types/pokemonTypes';
import { ScreenProps } from '../../types/systemTypes';
import * as pokemonsActions from '../store/pokemons.actions';
import SearchBar from '../components/SearchBar';
import { Navigation } from 'react-native-navigation';

interface AddPokemonProps extends ScreenProps {
    pokemons: Pokemon[]
}

class AddPokemon extends Component<AddPokemonProps> {
    handleRandomPress = () => {
        pokemonsActions.addPokemon();
        Navigation.pop(this.props.componentId)
    }
    // render callback
    render() {
        return (
            <View padding-s10>
                <SearchBar />
                <View>
                    <Button
                        label="Add Random"
                        onPress={this.handleRandomPress}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state: PokemonsStore) => ({
    pokemons: state.pokemons
})

export default connect(mapStateToProps)(AddPokemon)