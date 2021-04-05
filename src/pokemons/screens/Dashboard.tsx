import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Text, View, Button } from 'react-native-ui-lib';
import { connect } from 'react-redux';
import { Pokemon, PokemonsStore } from '../../types/pokemonTypes';
import { ScreenProps } from '../../types/systemTypes';
import * as pokemonsActions from '../store/pokemons.actions';
import PokemonCard from '../components/PokemonCard';

interface DashboardProps extends ScreenProps {
    pokemons: Pokemon[]
}


class Dashboard extends Component<DashboardProps> {
    // Push screen to the stack
    pushScreen(name: string) {
        Navigation.push(this.props.componentId, {
            component: {
                name 
            }
        })
    }

    // Render user's pokemons to the screen
    renderPokemons() {
        return this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
    }

    // componentDidMount callback
    componentDidMount() {
        pokemonsActions.fetchPokemons();
    }

    // render callback
    render() {
        console.log(this.props.pokemons)
        return (
            <View padding-s10>
                { this.renderPokemons() }
                <Button
                    text70BO
                    white
                    background-green30
                    label="Add Pokemon"
                    onPress={() => this.pushScreen("PokeApp.AddPokemon")}
                    margin-s6
                />
            </View>
        )
    }
}

const mapStateToProps = (state: PokemonsStore) => ({
    pokemons: state.pokemons,
});

export default connect(mapStateToProps)(Dashboard);