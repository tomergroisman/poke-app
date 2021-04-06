import React, { Component } from 'react';
import { Button, View, LoaderScreen } from 'react-native-ui-lib';
import { ScrollView } from 'react-native-gesture-handler';
import { ScreenProps } from '../../types/systemTypes';
import * as pokemonsActions from '../store/pokemons.actions';
import * as pokemonsHandler from '../data/allPokemonHandler';
import SearchBar from '../components/SearchBar';
import { Navigation } from 'react-native-navigation';
import PokemonCard from '../components/PokemonCard';
import { Pokemon, PokemonHash, PokemonsStore } from '../../types/pokemonTypes';
import { connect } from 'react-redux';

interface AddPokemonProps extends ScreenProps {
    hash: PokemonHash
}

interface AddPokemonState {
    search: string,
    loading: string
}

class AddPokemon extends Component<AddPokemonProps, AddPokemonState> {

    constructor(props: AddPokemonProps) {
        super(props);

        this.state = {
            search: "",
            loading: ""
        }
    }

    // On change text handler
    handleSearchChange = (search: string) => {
        this.setState({ search })
    }

    // On press handler
    handlePress = (pressType: string) => {
        this.setState({ loading: pressType });
    }

    // Filter pokemons that contains the search term
    filterPokemons() {
        return !!this.state.search ?
            pokemonsHandler
                .filterPokemons(this.state.search)
                .map(pokemon => 
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        onPress={this.handlePress.bind(this, pokemon.name)} 
                        disabled={!!this.props.hash[pokemon.id]}
                    />) :
            []
    }

    // Submit and add a pokemon to the user's pokemon list
    async handleSubmit() {
        await pokemonsActions.addPokemon(this.state.loading === "RANDOM" ? undefined : this.state.loading);
        Navigation.pop(this.props.componentId)
    }

    // componentDidUpdate callback
    componentDidUpdate({}, prevState: AddPokemonState) {
        
        if (this.state.loading && prevState.loading !== this.state.loading) {
            this.handleSubmit();
        }
    }

    // render callback
    render() {
        return (
            <View padding-s10>
                { !!this.state.loading ?
                <LoaderScreen /> :
                <ScrollView>
                    <SearchBar search={this.state.search} actions={{ set: this.handleSearchChange }}/>
                    { this.filterPokemons() }
                    <View>
                        <Button
                            label="Add Random"
                            onPress={this.handlePress.bind(this, "RANDOM")}
                            margin-s6
                        />
                    </View> 
                </ScrollView> }
            </View>
        )
    }

}

function mapStateToProps(state: PokemonsStore) {
    return {
        hash: state.hash
    }
}

export default connect(mapStateToProps)(AddPokemon)