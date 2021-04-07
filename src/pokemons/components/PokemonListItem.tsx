import React, { Component } from 'react';
import { Image, ListItem, Text } from 'react-native-ui-lib';
import { Pokemon } from '../../types/pokemonTypes';

interface PokemonListItemProps {
    pokemon: Pokemon,
    onPress?: () => any,
    disabled?: boolean,
}

export default class PokemonListItem extends Component<PokemonListItemProps> {
    // render callback
    render() {
        return (
            <ListItem onPress={this.props.onPress} height={92}>
                <ListItem.Part middle>
                    <Text
                        text50T
                        grey40={this.props.disabled}
                    >
                        {this.props.pokemon.name}
                    </Text>
                </ListItem.Part>
                <ListItem.Part right>
                    <Image
                        source={{ uri: this.props.pokemon.img }}
                        height={80}
                        width={80}
                        style={{ opacity: this.props.disabled ? 0.5 : 1}}
                    />
                </ListItem.Part>
            </ListItem>
        )
    }
}
