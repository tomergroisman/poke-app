import React, { Component } from 'react';
import { TextField, View } from 'react-native-ui-lib';

interface SearchBarProps {
    search: string
    actions: { set: (search: string) => void }
}

export default class SearchBar extends Component<SearchBarProps> {
    // render callback
    render() {
        return (
            <View>
                <TextField
                    value={this.props.search}
                    placeholder="Pokemon Name"
                    onChangeText={(value: string) => this.props.actions.set(value)}
                />
            </View>
        )
    }
}
