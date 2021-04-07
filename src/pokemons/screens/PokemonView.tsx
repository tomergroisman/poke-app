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

    // @ts-ignore
    deleteMe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

        return (
            <TouchableOpacity onPress={() => Alert.alert("Clicked!")}>
                <View
                    height={100}
                    width={100}
                    backgroundColor={Colors.red20}
                    center
                    padding-s5
                >
                    <Animated.Text
                        style={[
                            { color: Colors.white },
                            // @ts-ignore
                            { transform: [{ scale }]}
                        ]}>
                            Delete
                        </Animated.Text>
                </View>
            </TouchableOpacity>
        )
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
                <Swipeable renderLeftActions={this.deleteMe}>
                    <View
                        width="100%"
                        height={100}
                        backgroundColor={Colors.blue60}
                    />
                </Swipeable>
            </View>
        )
    }
}
