import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const QrScreen = () => {
    return (
        <View style={qstyles.container}>
            <View style={qstyles.infoqrContainer}>
                <Image source={require('../assets/images/qr-code.png')}
                style={qstyles.imageDirect}
                />
            </View>
        </View>
    )
}

export default QrScreen;

const qstyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infoqrContainer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },
    imageDirect: {
        width: 350,
        height: 350,
        marginVertical: 80,
    },
})