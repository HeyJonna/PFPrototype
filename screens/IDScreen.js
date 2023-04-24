import React, { useEffect, useState } from 'react';
import { 
        View, 
        Text, 
        ScrollView, 
        SafeAreaView, 
        StyleSheet, 
        Image,
        TouchableOpacity, 
    } from 'react-native'
import idData from '../assets/data/idData';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const IDScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={istyles.container}>
                {/* Módulos */}
                    <View style={istyles.popularWrapper}>
                        {idData.map((item) => (
                            <TouchableOpacity onPress={() => navigation.navigate('FIES')}>
                                <View style={[istyles.popularCardWrapper,{
                                    marginTop: item.id == 1 ? 10:20,
                                },
                                ]}>
                                    <View>
                                        <View>
                                            <View style={istyles.popularTitlesWrapper}>
                                                    <View style={istyles.headergoes}>
                                                        <Image source={require('../assets/images/fies-logo-oficial.png')} 
                                                        style={istyles.goeslogo}
                                                        />
                                                    </View>
                                                    <View style={istyles.infocontainer}>
                                                        <Image source={item.image} style={istyles.popularCardImage}/>
                                                        <View style={istyles.idcontainer}>
                                                            <Text style={istyles.popularTitlesTitle}>{item.name}</Text>
                                                            <Text style={istyles.popularTitlesTitle}>{item.name2}</Text>
                                                            <Text style={istyles.popularTitleDescription}>{item.account}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        <View>
                                            <View style={istyles.popularCardBottom}>
                                                <View style={istyles.moreinfoBottom}>
                                                    <Text style={istyles.titleNacion}>NACIONALIDAD:</Text>
                                                    <Text style={istyles.infonacion}>{item.nacionalidad}</Text>
                                                    <Text style={istyles.titleUbication}>RESIDENCIA:</Text>
                                                    <Text style={istyles.infoubication}>{item.ubication}</Text>
                                                    <Text style={istyles.titleIngreso}>TIPO DE INGRESO:</Text>
                                                    <Text style={istyles.infoIngreso}>{item.ingreso}</Text>
                                                    <Text style={istyles.titleMoney}>MONTO HISTÓRICO RECIBIDO:</Text>
                                                    <Text style={istyles.infomoney}>{item.money}</Text>
                                                    <Text style={istyles.titleOrigen}>UBICACIÓN DE ENVÍO:</Text>
                                                    <Text style={istyles.infoorigen}>{item.origen}</Text>
                                                    <Text style={istyles.titleBanco}>BANCOS DONDE ES CLIENTE:</Text>
                                                    <Text style={istyles.infoBanco}>{item.banco}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Información')}>
                        <View style={istyles.moreInfContainer}>
                                <MaterialCommunityIcons name="file-document-edit-outline" size={30} color="black" style={istyles.moreInfoSymbol} />
                                <Text style={istyles.moreInfText}>INFORMACIÓN DETALLADA</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('QR')}>
                        <View style={istyles.qrContainer}>
                            <MaterialCommunityIcons name="qrcode-scan" size={30} color="black" style={istyles.moreInfoSymbolQr} />
                            <Text style={istyles.moreInfText}>GENERAR CÓDIGO QR</Text>
                        </View>
                    </TouchableOpacity>
        </View>
    );
};

export default IDScreen;

const istyles = StyleSheet.create({
    container: {
        flex: 1,
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
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesTitle: {
        fontFamily: 'Arial',
        fontSize: 25,
        color: 'black',
        flexWrap: 'wrap',
    },
    popularWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
    },
    popularTitle: {
        fontSize: 16,
    },
    popularCardWrapper: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
    },
    popularTitlesWrapper: {
        marginTop: 0,
    },
    headergoes: {
        backgroundColor:'#545454',
        marginRight: 20,
    },
    goeslogo: {
        width: 'auto',
        height: 70,
    },
    infocontainer: {
        borderColor: '#545454',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
    },
    popularTitlesTitle: {
        fontSize: 15,
        flexWrap: 'wrap',
        marginRight: 30,
    },
    popularTitleDescription: {
        flexDirection: 'column',
        marginTop: 5,
        fontSize: 15,
    },
    popularCardBottom: {
        flexDirection: 'column',
        paddingVertical: 10,
        marginBottom: 10,
    },
    titleNacion: {
        fontSize: 10,
        color: '#545454',
    },
    titleUbication: {
        fontSize: 10,
        color: '#545454',
        paddingTop: 5,
    },
    titleIngreso: {
        fontSize: 10,
        color: '#545454',
        paddingTop: 5,
    },
    titleMoney: {
        fontSize: 10,
        color: '#545454',
        paddingTop: 5,
    },
    titleOrigen: {
        fontSize: 10,
        color: '#545454',
        paddingTop: 5,
    },
    titleProductos: {
        fontSize: 10,
        color: '#545454',
        paddingTop: 5,
    },
    titleBanco: {
        fontSize: 10,
        color: '#545454',
        paddingTop: 5,       
    },
    popularCardRight: {
        paddingTop: 5,
    },
    popularCardImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        borderRadius: 20,
    },
    idcontainer: {
        flexDirection: 'column',
        paddingTop: 5,
        paddingLeft: 5,
    },
    moreInfContainer: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    moreInfoSymbol: {
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    qrContainer: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    moreInfoSymbolQr: {
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
})