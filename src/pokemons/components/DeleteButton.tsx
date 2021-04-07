import React, { Component } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { View, TouchableOpacity, Colors, Typography } from 'react-native-ui-lib';

interface DeleteButtonProps {
    onPress: () => any,
    scale: Animated.AnimatedInterpolation,
    width: number
}

export default class DeleteButton extends Component<DeleteButtonProps> {
    render() {
        const { scale }= this.props;
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View
                    flex
                    center
                    bg-red10 width={this.props.width}
                    marginR-s3
                    br20
                >
                    <Animated.Text 
                        style={
                            [
                                styles.text,
                                {
                                    transform: [{ scale }],
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