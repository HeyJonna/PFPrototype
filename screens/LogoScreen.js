import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LogoScreen  = () => {
    return (
        <View style={lgstyles.imageContainer}>
            <Image source={require('../assets/images/fies-logo.gif')} style={lgstyles.imageStyle}/>
        </View>
    )
}

export default LogoScreen;

const lgstyles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor:'white',
    },
    imageStyle: {
        width: 450,
        height: 450,
    },
})