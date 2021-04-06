import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native-ui-lib';

interface DeleteButtonProps {
    onPress: () => any
}

export default class DeleteButton extends Component<DeleteButtonProps> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View>
                    <Text>Delete</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
