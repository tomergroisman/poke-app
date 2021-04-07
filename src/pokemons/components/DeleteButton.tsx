import React, { Component } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { View, TouchableOpacity, Colors, Typography } from 'react-native-ui-lib';

interface DeleteButtonProps {
    onPress: () => any,
    trans: Animated.AnimatedInterpolation,
    width: number
}

export default class DeleteButton extends Component<DeleteButtonProps> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View
                    flex
                    center
                    bg-red10 width={this.props.width}
                    marginR-s3
                >
                    <Animated.Text 
                        style={
                            [
                                styles.text,
                                {
                                    transform: [{ scale: this.props.trans }],
                                },
                            ]
                        }
                    >
                        Delete
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    text: {
        ...Typography.text70L,
        color: Colors.white
    }
})