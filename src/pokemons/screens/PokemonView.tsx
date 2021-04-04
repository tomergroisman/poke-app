import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ScreenProps } from '../../types/systemTypes';

interface PokemonViewProps extends ScreenProps { }

export default class PokemonView extends Component<PokemonViewProps> {
    // render callback
    render() {
        return (
            <View>
                <Text> Pokemon View </Text>
            </View>
        )
    }
}
