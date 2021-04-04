import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { ScreenProps } from '../../types/systemTypes';

interface DashboardProps extends ScreenProps { }


export default class Dashboard extends Component<DashboardProps> {
    // Push screen to the stack
    pushScreen(name: string) {
        Navigation.push(this.props.componentId, {
            component: {
                name 
            }
        })
    }

    // render callback
    render() {
        return (
            <View>
                <Text>Dashboard</Text>
                <Text onPress={() => this.pushScreen("PokeApp.AddPokemon")}>To Add Pokemon</Text>
                <Text onPress={() => this.pushScreen("PokeApp.PokemonView")}>To Pokemon View</Text>
            </View>
        )
    }
}
