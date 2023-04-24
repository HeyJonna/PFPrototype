import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Transaction1 = () => {
    return (
        <View style={tstyles.container}>
            <View style={tstyles.infotransactionContainer}>
                <Text style={tstyles.infoTexto}>TIPO DE TRANSACCIÓN</Text>
            </View>
        </View>
    )
}

export default Transaction1;

const tstyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infotransactionContainer: {
    marginTop: 10,
    marginLeft: 10,
    },
    infoText: {

    },
})
