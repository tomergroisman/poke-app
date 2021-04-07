import React, { Component } from 'react';
import { Text, View, LoaderScreen, Image } from 'react-native-ui-lib';
import { getPokemon } from '../store/pokemons.api';
import { PokemonFull } from '../../types/pokemonTypes';
import { ScreenProps } from '../../types/systemTypes';
import { capitalizeFirst } from '../../helpers/stringManipulations';
import TextCard from '../components/TextCard';
import { ScrollView } from 'react-native-gesture-handler';

interface PokemonViewProps extends ScreenProps {
    id: number
}

interface PokemonViewState {
    pokemon?: PokemonFull
}

export default class PokemonView extends Component<PokemonViewProps, PokemonViewState> {
    constructor(props: PokemonViewProps) {
        super(props);

        this.state = { };
    }

    // componentDidMount callback
    componentDidMount() {
        const fetchAndSet = async () => {
            const pokemon = await getPokemon(this.props.id);
            this.setState({
                pokemon,
            });
        };

        fetchAndSet();
    }

    // render callback
    render() {
        return (
            <View flex padding-s10>
                {!this.state.pokemon ?
                <LoaderScreen flex center /> :
                <ScrollView>
                    <View flexS centerH>
                        <Text text20T>{capitalizeFirst(this.state.pokemon.name)}</Text>
                        <View flexS row marginV-s5>
                            <Image width={96} height={96} source={{ uri: this.state.pokemon.sprites.front_default }} />
                            <Image width={96} height={96} source={{ uri: this.state.pokemon.sprites.back_default }} />
                        </View>
                    </View>
                    <View flex paddingH-s10>
                        <TextCard title="no. " text={this.state.pokemon.id} />
                        <TextCard title="Weight" text={this.state.pokemon.weight} />
                        <TextCard title="Types" text={this.state.pokemon.types.map(type => capitalizeFirst(type.type.name)).join(", ")} />
                        <TextCard title="Base XP:" text={this.state.pokemon.base_experience} />
                        <TextCard title="Stats:" text={this.state.pokemon.stats.map(stat => capitalizeFirst(stat.stat.name) + " " + stat.base_stat).join("\n")} />
                    </View>
                </ScrollView> }
            </View>
        )
    }
}
