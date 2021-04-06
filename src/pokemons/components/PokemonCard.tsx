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
    render() {
        const disabledStyles: TextStyle = {
            textDecorationLine: "line-through",
        }
        
        return (
            <View>
                <Text
                    onPress={!this.props.disabled ? this.props.onPress : () => Alert.alert("You already have that Pokemon!")}
                    style={this.props.disabled ? disabledStyles : undefined}
                    color={this.props.disabled ? Colors.grey40 : Colors.black}
                >
                        {this.props.pokemon.name}
                </Text>
            </View>
        )
    }
}
