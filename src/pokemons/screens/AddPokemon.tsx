import React, { Component } from 'react';
import { Button, View, LoaderScreen } from 'react-native-ui-lib';
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
    loading: boolean
}

class AddPokemon extends Component<AddPokemonProps, AddPokemonState> {

    constructor(props: AddPokemonProps) {
        super(props);

        this.state = {
            search: "",
            loading: false
        }
    }

    // Add random pokemon button press handler
    handleRandomPress = () => {
        this.setState({ loading: true });
        
    }

    // componentDidMount callback
    componentDidMount() {
        pokemonsActions.resetPokemons();
    }

    // componentDidUpdate callback
    componentDidUpdate({}, prevState: AddPokemonState) {
        if (this.state.loading && prevState.loading !== this.state.loading) {
            setTimeout(async () => {
                await pokemonsActions.addPokemon();
                await pokemonsActions.fetchPokemons();
                Navigation.pop(this.props.componentId)
            }, 500);
        }

        if (prevState.search !== this.state.search) {
            pokemonsActions.filterPokemons(this.state.search);
        }
    }

    // render callback
    render() {
        return (
            <View padding-s10>
                { this.state.loading ?
                <LoaderScreen />:
                <View>
                    <SearchBar search={this.state.search} actions={{ set: (search: string) => this.setState({ search }) }}/>
                    { this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />) }
                    <View>
                        <Button
                            label="Add Random"
                            onPress={this.handleRandomPress}
                            margin-s6
                        />
                    </View> 
                </View> }
            </View>
        )
    }

}

const mapStateToProps = (state: PokemonsStore) => ({
    pokemons: state.pokemons
})

export default connect(mapStateToProps)(AddPokemon)