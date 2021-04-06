import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { View } from 'react-native-ui-lib';
import { Pokemon, PokemonHash, PokemonsStore } from '../../types/pokemonTypes';
import PokemonCard from './PokemonCard';

interface PokemonsListProps {
    pokemons: Pokemon[],
    onPokemonPress: (pressType: string) => void,
    hash: PokemonHash
}

class PokemonsList extends Component<PokemonsListProps> {

    // Item Render
    renderItem = ({ item }: { item: Pokemon }) => {
        return (
            <PokemonCard
                key={item.id}
                pokemon={item}
                onPress={() => this.props.onPokemonPress(item.name)} 
                disabled={!!this.props.hash[item.id]}
            />
        )
    }

    // render callback
    render() {
        return (
            <View flex-5>
                <FlatList
                    data={this.props.pokemons}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                    initialNumToRender={30}
                />
            </View>
        )
    }
}

function mapStateToProps(state: PokemonsStore) {
    return {
        hash: state.hash
    }
}

export default connect(mapStateToProps)(PokemonsList);