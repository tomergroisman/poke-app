import React, { Component } from 'react';
import { Button, View, LoaderScreen } from 'react-native-ui-lib';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Pokemon, PokemonsStore } from '../../types/pokemonTypes';
import { ScreenProps } from '../../types/systemTypes';
import * as pokemonsActions from '../store/pokemons.actions';
import SearchBar from '../components/SearchBar';
import { Navigation } from 'react-native-navigation';
import PokemonCard from '../components/PokemonCard';

interface AddPokemonProps extends ScreenProps {
    pokemons: Pokemon[]
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

    // On press handler
    handlePress = (pressType: string) => {
        this.setState({ loading: pressType });
    }

    // Filter pokemons that contains the search term
    filterPokemons() {
        return this.props.pokemons
            .filter(pokemon => pokemon.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()))
            .map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} onPress={() => this.handlePress(pokemon.name)} />)
    }

    // componentDidMount callback
    componentDidMount() {
        pokemonsActions.getAllPokemons();
    }

    // componentDidUpdate callback
    componentDidUpdate({}, prevState: AddPokemonState) {
        if (this.state.loading && prevState.loading !== this.state.loading) {
            setTimeout(async () => {
                await pokemonsActions.fetchPokemons();
                await pokemonsActions.addPokemon(this.state.loading === "RANDOM" ? undefined : this.state.loading);
                Navigation.pop(this.props.componentId)
            }, 500);
        }
    }

    // render callback
    render() {
        return (
            <View padding-s10>
                { !!this.state.loading ?
                <LoaderScreen /> :
                <ScrollView>
                    <SearchBar search={this.state.search} actions={{ set: (search: string) => this.setState({ search }) }}/>
                    { !!this.state.search && this.filterPokemons() }
                    <View>
                        <Button
                            label="Add Random"
                            onPress={() => this.handlePress("RANDOM")}
                            margin-s6
                        />
                    </View> 
                </ScrollView> }
            </View>
        )
    }

}

const mapStateToProps = (state: PokemonsStore) => ({
    pokemons: state.pokemons
})

export default connect(mapStateToProps)(AddPokemon)