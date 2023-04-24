import React from 'react';
import * as Font from 'expo-font';
import { 
        View, 
        Text, 
        ScrollView, 
        SafeAreaView, 
        StyleSheet, 
        Image,
        TouchableOpacity,
        ImageBackground, 
    } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import idData from '../assets/data/idData';
import { useNavigation } from '@react-navigation/native';

const WalletScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={wstyles.container}>
            <ScrollView>
                {/* Header */}
                <SafeAreaView>
                    <View style={wstyles.headerboxes}>
                        <View style={wstyles.headerWrapper}>
                            <Image
                                source={require('../assets/images/profile.jpg')}
                                style={wstyles.profileImage}
                            />
                        </View>
                        <View style={wstyles.headeruser}>
                            <Text style={wstyles.hellotext}> Hola de nuevo,</Text>
                            <Text style={wstyles.username}> Valeria Escobar </Text>
                        </View>
                        <View style={wstyles.headerNotification}>
                            <MaterialCommunityIcons name="bullhorn-outline" size={30} color= 'black'/>
                        </View>
                    </View>
                </SafeAreaView>
                {/* Balance */}
                <View style={wstyles.balanceWrapper}>
                    <ImageBackground source={require('../assets/images/card.png')} borderRadius={15}>
                        <View style={wstyles.balanceCard}>
                            <View style={wstyles.balanceCardUser}>
                                <Text style={wstyles.balanceCardUserName}>VALERIA ESCOBAR</Text>   
                            </View>
                            <View style={wstyles.balanceCardAccount}>
                                <Text style={wstyles.balanceCardNumberAccount}>0100 0011 000</Text>
                            </View>
                            <View style={wstyles.balanceCardBalance}>
                                <Text style={wstyles.balanceCardBalanceTitle}>BALANCE DISPONIBLE</Text>
                                <Text style={wstyles.balanceCardBalanceMoney}>$400</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                {/* Opciones */}
                <View style={wstyles.opcionesWalletContainer}>
                    <View style={wstyles.opcionesWalletContainerContainers}>
                        <View style={wstyles.opcionesWalletRetirar}>
                            <Image source={require('../assets/images/retiro-dinero.png')}
                                style={wstyles.imagenDiseño}
                            />
                            <View style={wstyles.textoContainer}>
                                <Text style={wstyles.textoServicios}>Retirar</Text>
                                <Text style={wstyles.textoServicios}>Dinero</Text>
                            </View>
                        </View>
                        <View style={wstyles.opcionesWalletEnviar}>
                            <Image source={require('../assets/images/envio-dinero.png')}
                                    style={wstyles.imagenDiseño}
                            />
                            <View style={wstyles.textoContainer}>
                                <Text style={wstyles.textoServicios}>Enviar</Text>
                                <Text style={wstyles.textoServicios}>Dinero</Text>
                            </View>
                        </View>
                        <View style={wstyles.opcionesWalletServicios}>
                            <Image source={require('../assets/images/pago-servicios.png')} 
                                    style={wstyles.imagenDiseño}
                            />
                            <View style={wstyles.textoContainer}>
                                <Text style={wstyles.textoServicios}>Pago de</Text>
                                <Text style={wstyles.textoServicios}>Servicios</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Historial Transacciones */}
                <View style={wstyles.transactionContainer}>
                    <View style={wstyles.transactionContainerContainers}>
                        <View style={wstyles.transactionHeaderContainer}>
                            <Text style={wstyles.textoTransacciones}>Transacciones Recientes</Text>
                        </View>
                    </View>
                    
                    <View style={wstyles.transactionCardContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Transacción')}>
                            <View style={wstyles.transactionInfoOne}>
                                <View style={wstyles.transactionIconSale}>
                                    <MaterialCommunityIcons name="arrow-up-thick" size={35} color="white" />
                                </View>
                                <View style={wstyles.transactionInfoText}>
                                    <Text style={wstyles.transactionMovimiento}>Retiro a cuenta bancaria</Text>
                                    <Text>06/12/2022</Text>
                                </View>
                                <Text style={wstyles.transactionMontoMenos}>-$200.00</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={wstyles.transactionInfoTwo}>
                            <View style={wstyles.transactionIconEntra}>
                                <MaterialCommunityIcons name="arrow-down-thick" size={35} color="white" />
                            </View>
                            <View style={wstyles.transactionInfoText}>
                                <Text style={wstyles.transactionMovimiento}>Deposito</Text>
                                <Text>01/12/2022</Text>
                            </View>
                            <Text style={wstyles.transactionMonto}>+$100.00</Text>
                        </View>
                        <View style={wstyles.transactionInfoThree}>
                            <View style={wstyles.transactionIconEntra}>
                                <MaterialCommunityIcons name="arrow-down-thick" size={35} color="white" />
                            </View>
                            <View style={wstyles.transactionInfoText}>
                                <Text style={wstyles.transactionMovimiento}>Deposito</Text>
                                <Text>01/12/2022</Text>
                            </View>
                            <Text style={wstyles.transactionMonto}>+$100.00</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default WalletScreen;

const wstyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerboxes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 30,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    headeruser: {
        paddingTop: 20,
        alignItems: 'center',
        alignSelf: 'flex-end',
        paddingHorizontal: 25,
    },
    hellotext: {
        fontSize: 10,
    },
    username: {
        fontSize: 20,
    },
    headerNotification: {
        marginLeft: 'auto',
        paddingRight: 20,
        paddingTop: 20,
        alignSelf: 'center',
    },
    balanceWrapper: {
        marginTop: 20,
        paddingHorizontal: 25,

    },
    balanceCard: {
        borderRadius: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: 8,
    },
    balanceCardUser: {
        paddingTop: 30,
        paddingLeft: 10,
    },
    balanceCardUserName: {
        fontSize: 10,
        color: 'white'
    },
    balanceCardAccount: {
        paddingTop: 20,
        paddingLeft: 10,
    },
    balanceCardNumberAccount: {
        fontSize: 12,
        color: 'white'
    },
    balanceCardBalance: {
        paddingTop: 20,
        paddingLeft: 10,
        paddingBottom: 30,
    },
    balanceCardBalanceTitle: {
        fontSize: 12,
        color: 'white'
    },
    balanceCardBalanceMoney: {
        fontSize: 22,
        color: 'white'
    },
    opcionesWalletContainer: {
        marginTop: 20,
    },
    opcionesWalletContainerContainers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    opcionesWalletRetirar: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginLeft: 25,
        paddingHorizontal: 25,
        paddingBottom: 10,
   },
    opcionesWalletEnviar: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 25,
   },
    opcionesWalletServicios: {
        backgroundColor: 'white',
        borderRadius: 15,
        marginRight: 25,
        paddingHorizontal: 25,
        paddingBottom: 10,
   },
    imagenDiseño: {
        width: 50,
        height: 50,
        borderRadius: 40,
        marginTop: 10,
        alignSelf: 'center',
   },
   textoContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
   },
   textoServicios: {
        fontSize: 15,
   },
   transactionContainer: {
   },
   transactionContainerContainers: {

   },
   transactionHeaderContainer: {
    paddingLeft: 25,
    paddingTop: 15,
   },
   textoTransacciones: {
    fontSize: 16,
   },
   transactionStatusContainer: {
    flexDirection: 'row',
    marginTop: 5,
   },
   transactionStatusCard:{
    borderRadius: 20,
    marginLeft: 25,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
   },
   transactionStatusText: {
   },
   transactionStatusCardSend: {
    borderRadius: 20,
    backgroundColor: 'white',
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
   },
   transactionStatusCardRecibe: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
   },
   transactionCardContainer: {
    marginTop: 10,
   },
   transactionIconEntra: {
    backgroundColor: 'green',
    borderRadius: 40,
    marginHorizontal: 10,
    marginVertical: 10,
   },
   transactionIconSale: {
    backgroundColor: 'red',
    borderRadius: 40,
    marginHorizontal: 10,
    marginVertical: 10,
   },
   transactionInfoOne: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
   },
   transactionInfoText: {
    flexDirection: 'column'
   },
   transactionInfoTwo: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
   },
   transactionInfoThree: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
   },
   transactionMonto: {
    marginLeft: 'auto',
    marginRight: 10,
    color: 'green',
   },
   transactionMontoMenos: {
    marginLeft: 'auto',
    marginRight: 10,
    color: 'red',
   },
   transactionMovimiento: {
    fontSize: 14,
    fontWeight: 'bold'
   }
})
