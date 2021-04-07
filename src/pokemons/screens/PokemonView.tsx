import React, { Component } from 'react';
import { Alert, Animated } from 'react-native';
import { Text, View, LoaderScreen, Colors, TouchableOpacity } from 'react-native-ui-lib';
import { Swipeable } from 'react-native-gesture-handler';
import { getPokemon } from '../store/pokemons.api'
import { PokemonFull } from '../../types/pokemonTypes';
import { ScreenProps } from '../../types/systemTypes';


interface PokemonViewProps extends ScreenProps {
    id: number
}

interface PokemonViewState {
    loading: boolean,
    pokemon?: PokemonFull
}

export default class PokemonView extends Component<PokemonViewProps, PokemonViewState> {

    constructor(props: PokemonViewProps) {
        super(props);

        this.state = {
            loading: true
        }
    }

    // componentDidMount callback
    componentDidMount() {
        const fetchAndSet = async () => {
            const pokemon = await getPokemon(this.props.id);
            this.setState({
                pokemon,
                loading: false
            })
        }

        fetchAndSet();
    }

    // render callback
    render() {
        return (
            <View flex padding-s6>
                { this.state.loading ? 
                <LoaderScreen flex center /> :
                <View>
                    <Text>Name: {this.state.pokemon?.name}</Text>
                    <Text>ID: {this.state.pokemon?.id}</Text>
                    <Text>Weight: {this.state.pokemon?.weight}</Text>
                    <Text>Types: {this.state.pokemon?.types.map(type => type.type.name).join(", ")}</Text>
                </View> }
            </View>
        )
    }
}
