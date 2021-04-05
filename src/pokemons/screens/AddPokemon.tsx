import React, { Component } from 'react';
import { Button, View } from 'react-native-ui-lib';
import { connect } from 'react-redux';
import { Pokemon, PokemonsStore } from '../../types/pokemonTypes';
import { ScreenProps } from '../../types/systemTypes';
import * as pokemonsActions from '../store/pokemons.actions';
import SearchBar from '../components/SearchBar';

interface AddPokemonProps extends ScreenProps {
    pokemons: Pokemon[]
}

class AddPokemon extends Component<AddPokemonProps> {
    // render callback
    render() {
        return (
            <View padding-s10>
                <SearchBar />
                <View flex bottom>
                    <Button
                        label="Add Random"
                        onPress={pokemonsActions.addPokemon}
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