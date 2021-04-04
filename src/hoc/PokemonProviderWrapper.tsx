import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../pokemons/store/pokemons.store';

const withPokemonProvider = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return class WithProvider extends React.Component<P> {
        render() {
            return (
                <Provider store={store}>
                    <WrappedComponent {...this.props} />
                </Provider>
            )
        }
    }
        
}

export default withPokemonProvider;
