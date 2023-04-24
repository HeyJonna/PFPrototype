import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const InfCuenta = () => {
    return (
        <View style={cstyles.container}>
            <View style={cstyles.infCuentaContainer}>
                <Text style={cstyles.infCuentaTexto}>HISTÓRICO MENSUAL</Text>
                <Image source={require('../assets/images/grafico-verde.png')}
                style={cstyles.imageGrafico}
                />
            </View>
            <View style={cstyles.infCuentaWrapper}>
                <View style={cstyles.infCuentaPrimer}>
                    <View style={cstyles.infTextoCuenta}>
                        <Text>JULIO 07, 2022</Text>
                        <Text>NEW YORK, ESTADOS UNIDOS</Text>
                    </View>
                    <View style={cstyles.infCuentaBandera}>
                        <Image source={require('../assets/images/eeuu-bandera.png')}
                        style={cstyles.infUbicacionBandera}
                        />
                    </View>
                </View>
                <View style={cstyles.infCuentaSegunda}>
                    <View style={cstyles.infTextoCuenta}>
                        <Text>AGOSTO 20, 2022</Text>
                        <Text>NEW YORK, ESTADOS UNIDOS</Text>
                    </View>
                    <View style={cstyles.infCuentaBandera}>
                        <Image source={require('../assets/images/eeuu-bandera.png')}
                        style={cstyles.infUbicacionBandera}
                        />
                    </View>
                </View>
                <View style={cstyles.infCuentaTercer}>
                    <View style={cstyles.infTextoCuenta}>
                        <Text>SEPTIEMBRE 15, 2022</Text>
                        <Text>NEW YORK, ESTADOS UNIDOS</Text>
                    </View>
                    <View style={cstyles.infCuentaBandera}>
                        <Image source={require('../assets/images/eeuu-bandera.png')}
                        style={cstyles.infUbicacionBandera}
                        />
                    </View>
                </View>
                <View style={cstyles.infCuentaPrimer}>
                    <View style={cstyles.infTextoCuenta}>
                        <Text>OCTUBRE 02, 2022</Text>
                        <Text>NEW YORK, ESTADOS UNIDOS</Text>
                    </View>
                    <View style={cstyles.infCuentaBandera}>
                        <Image source={require('../assets/images/eeuu-bandera.png')}
                        style={cstyles.infUbicacionBandera}
                        />
                    </View>
                </View>
                <View style={cstyles.infCuentaSegunda}>
                    <View style={cstyles.infTextoCuenta}>
                        <Text>NOVIEMBRE 10, 2022</Text>
                        <Text>NEW YORK, ESTADOS UNIDOS</Text>
                    </View>
                    <View style={cstyles.infCuentaBandera}>
                        <Image source={require('../assets/images/eeuu-bandera.png')}
                        style={cstyles.infUbicacionBandera}
                        />
                    </View>
                </View>
                <View style={cstyles.infCuentaTercer}>
                    <View style={cstyles.infTextoCuenta}>
                        <Text>DICIEMBRE 24, 2022</Text>
                        <Text>NEW YORK, ESTADOS UNIDOS</Text>
                    </View>
                    <View style={cstyles.infCuentaBandera}>
                        <Image source={require('../assets/images/eeuu-bandera.png')}
                        style={cstyles.infUbicacionBandera}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default InfCuenta;

const cstyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infCuentaContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    infCuentaTexto: {
        marginTop: 20,
    },
    imageGrafico: {
        width: 300,
        height: 160,
        marginTop: 20,
    },
    infCuentaWrapper: {
        marginTop: 10,
    },
    infCuentaPrimer: {
        backgroundColor: 'white',
        marginHorizontal: 25,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
    },
    infCuentaBandera: {
        marginLeft: 'auto',
        marginHorizontal: 10,
    },
    infUbicacionBandera: {
        width: 50,
        height: 50,
    },
    infCuentaSegunda: {
        backgroundColor: 'white',
        marginHorizontal: 25,
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row',
    },
    infCuentaTercer: {
        backgroundColor: 'white',
        marginHorizontal: 25,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    infTextoCuenta: {
        marginLeft: 10,
    }
})
