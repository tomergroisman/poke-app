import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Alert, Animated, FlatList } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { View } from 'react-native-ui-lib';
import { Pokemon, PokemonHash, PokemonsStore } from '../../types/pokemonTypes';
import { deletePokemon } from '../store/pokemons.actions';
import PokemonListItem from './PokemonListItem';
import DeleteButton from './DeleteButton';

interface PokemonsListProps {
    pokemons: Pokemon[],
    onPokemonPress: (id: number) => void,
    hash: PokemonHash,
    useDisable?: boolean,
    deletable?: boolean
}

class PokemonsList extends Component<PokemonsListProps> {

    // PokemonList default props
    static defaultProps = {
        useDisable: true
    }

    // Render a delete button
    renderDeleteButton = (id: number, progress: any, dragX: Animated.Value) => {
        const BUTTON_WIDTH = 80;
        const trans = dragX.interpolate({
            inputRange: [0, BUTTON_WIDTH],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });

        return <DeleteButton onPress={() => deletePokemon(id)} trans={trans} width={BUTTON_WIDTH} />
    }

    // Fire a already have alert
    fireAlert() {
        Alert.alert("You already have that Pokemon!")
    }

    // Item Render
    renderItem = ({ item }: { item: Pokemon }) => {
        const isDisabled = this.props.useDisable && !!this.props.hash[item.id];
        const listItem = <PokemonListItem
            key={item.id}
            pokemon={item}
            onPress={isDisabled ? this.fireAlert : () => this.props.onPokemonPress(item.id)} 
            disabled={isDisabled}
        />

        if (this.props.deletable) {
            return (
                <Swipeable renderLeftActions={(progress: any, dragX: any) => this.renderDeleteButton(item.id, progress, dragX)}>
                    { listItem }
                </Swipeable>
            )
        }
        return listItem
    }

    // render callback
    render() {
        return (
            <View flexS>
                <FlatList
                    showsVerticalScrollIndicator={false}
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