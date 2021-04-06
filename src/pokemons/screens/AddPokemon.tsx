import React, { Component } from 'react';
import { Button, View, LoaderScreen } from 'react-native-ui-lib';
import { ScreenProps } from '../../types/systemTypes';
import * as pokemonsActions from '../store/pokemons.actions';
import * as pokemonsHandler from '../data/allPokemonHandler';
import SearchBar from '../components/SearchBar';
import { Navigation } from 'react-native-navigation';
import { PokemonHash, PokemonsStore } from '../../types/pokemonTypes';
import { connect } from 'react-redux';
import PokemonsList from '../components/PokemonsList';

interface AddPokemonProps extends ScreenProps {
    hash: PokemonHash
}

interface AddPokemonState {
    search: string,
    loading: boolean,
    selection?: number
}

class AddPokemon extends Component<AddPokemonProps, AddPokemonState> {

    constructor(props: AddPokemonProps) {
        super(props);

        this.state = {
            search: "",
            loading: false,
        }
    }

    // On change text handler
    handleSearchChange = (search: string) => {
        this.setState({ search })
    }

    // On press handler
    handlePress = (pokemonId?: number) => {
        this.setState({
            loading: true,
            selection: pokemonId
        });
    }

    // Filter pokemons that contains the search term
    filterPokemons() {
        const filteredPokemons = !!this.state.search ? pokemonsHandler.filterPokemons(this.state.search) : []
        return (
            <PokemonsList
                pokemons={filteredPokemons}
                onPokemonPress={this.handlePress}
            />
        )
            
    }

    // Submit and add a pokemon to the user's pokemon list
    async handleSubmit() {
        console.log(this.state.selection)
        await pokemonsActions.addPokemon(this.state.selection);
        Navigation.dismissModal(this.props.componentId)
    }

    // componentDidUpdate callback
    componentDidUpdate({}, prevState: AddPokemonState) {
        // Call handleSubmit only after loader is set
        if (this.state.loading && prevState.loading !== this.state.loading) {
            this.handleSubmit();
        }
    }

    // render callback
    render() {
        return (
            <View flex padding-s10>
                { !!this.state.loading ?
                <LoaderScreen /> :
                <View flex>
                    <SearchBar search={this.state.search} actions={{ set: this.handleSearchChange }}/>
                    { this.filterPokemons() }
                    <View flex bottom>
                        <Button
                            label="Add Random"
                            onPress={() => this.handlePress()}
                            margin-s6
                            text70BO
                        />
                    </View>
                </View> }
            </View>
        )
    }

}

function mapStateToProps(state: PokemonsStore) {
    return {
        hash: state.hash
    }
}

export default connect(mapStateToProps)(React.memo(AddPokemon))