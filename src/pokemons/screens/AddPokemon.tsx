import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ScreenProps } from '../../types/systemTypes';

interface AddPokemonProps extends ScreenProps { }

export default class AddPokemon extends Component<AddPokemonProps> {
    // render callback
    render() {
        return (
            <View>
                <Text> Add Pokemon </Text>
            </View>
        )
    }
}
