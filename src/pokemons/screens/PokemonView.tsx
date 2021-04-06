import React, { Component } from 'react';
import { Text, View, LoaderScreen } from 'react-native-ui-lib';
import { getPokemon } from '../store/pokemons.api'
import { Pokemon, PokemonFull } from '../../types/pokemonTypes';
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
