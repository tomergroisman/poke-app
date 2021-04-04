import React from 'react'
import { Provider } from 'react-redux'

const withProvider = <P extends object>(WrappedComponent: React.ComponentType<P>, store: any) => {
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

export default withProvider;
