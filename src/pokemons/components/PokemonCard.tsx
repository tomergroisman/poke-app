import React, { Component } from 'react';
import { Text, View } from 'react-native-ui-lib';
import { Pokemon } from '../../types/pokemonTypes';

interface PokemonCardProps {
    pokemon: Pokemon,
    onPress?: () => any
}

export default class PokemonCard extends Component<PokemonCardProps> {
    render() {
        return (
            <View>
                <Text onPress={this.props.onPress}>{this.props.pokemon.name}</Text>
            </View>
        )
    }
}
