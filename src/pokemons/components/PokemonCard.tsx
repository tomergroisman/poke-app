import React, { Component } from 'react';
import { TextStyle, Alert } from 'react-native';
import { Text, View, Colors } from 'react-native-ui-lib';
import { Pokemon } from '../../types/pokemonTypes';

interface PokemonCardProps {
    pokemon: Pokemon,
    onPress?: () => any,
    disabled?: boolean
}

export default class PokemonCard extends Component<PokemonCardProps> {
    // Fire a already have alert
    fireAlert() {
        Alert.alert("You already have that Pokemon!")
    }

    // render callback
    render() {
        const disabledStyles: TextStyle = {
            textDecorationLine: "line-through",
        }
        
        return (
            <View>
                <Text
                    onPress={!this.props.disabled ? this.props.onPress : this.fireAlert}
                    style={this.props.disabled ? disabledStyles : undefined}
                    color={this.props.disabled ? Colors.grey40 : Colors.black}
                >
                        {this.props.pokemon.name}
                </Text>
            </View>
        )
    }
}
