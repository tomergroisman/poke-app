import React, { Component } from 'react'
import { TextField, View } from 'react-native-ui-lib'

export default class SearchBar extends Component {
    render() {
        return (
            <View>
                <TextField
                    placeholder="Pokemon Name"
                />
            </View>
        )
    }
}
