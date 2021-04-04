import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Pokemon, PokemonsStore } from '../../types/pokemonTypes';
import { ScreenProps } from '../../types/systemTypes';

interface AddPokemonProps extends ScreenProps {
    pokemons: Pokemon[]
}

class AddPokemon extends Component<AddPokemonProps> {
    // render callback
    render() {
        return (
            <View>
                <Text> Add Pokemon </Text>
            </View>
        )
    }
}

const mapStateToProps = (state: PokemonsStore) => ({
    pokemons: state.pokemons
})

export default connect(mapStateToProps)(AddPokemon)