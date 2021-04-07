import React, { Component } from 'react';
import { Text, View } from 'react-native-ui-lib';

interface TextCardProps {
    title: string,
    text: string | number
}

export default class TextCard extends Component<TextCardProps> {
    render() {
        return (
            <View flexS center paddingV-s3>
                <Text text60L>{this.props.title.toUpperCase()} </Text>
                <Text text70T>{this.props.text}</Text>
            </View>
        )
    }
}
