import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { 
        View, 
        Text, 
        ScrollView, 
        SafeAreaView, 
        StyleSheet, 
        Image,
        TouchableOpacity,
    } from 'react-native'
import learnModules from '../assets/data/modulesData';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default LearnScreen = () => {

    const [currentIndex, setCurrentIndex] = React.useState(null);
    return (
        <View style={lstyles.container}>
            <ScrollView>
                {/* Header */}
                <SafeAreaView>
                    <View style={lstyles.headerboxes}>
                        <View style={lstyles.headerWrapper}>
                            <Image
                                source={require('../assets/images/profile.jpg')}
                                style={lstyles.profileImage}
                            />
                        </View>
                        <View style={lstyles.headeruser}>
                            <Text style={lstyles.hellotext}> Hola de nuevo,</Text>
                            <Text style={lstyles.username}> Valeria Escobar </Text>
                        </View>
                        <View style={lstyles.headerNotification}>
                            <MaterialCommunityIcons name="bullhorn-outline" size={30} color= 'black'/>
                        </View>
                    </View>
                </SafeAreaView>
                {/* Title */}
                <View style={lstyles.infoContainer}>
                    <View style={lstyles.titlesWrapper}>
                        <Text style={lstyles.titlesTitle}>¿Qué aprenderemos hoy?</Text>
                    </View>
                    {/* Módulos */}
                    <View style={lstyles.popularWrapper}>
                        <Text style={lstyles.popularTitle}>Temas</Text>
                        {learnModules.map(({title, submodulos, modulos, tiempo}, index) => {
                            return (
                                <TouchableOpacity 
                                    key={title}
                                    onPress={() => {
                                        setCurrentIndex(index === currentIndex ? null : index);
                                    }}
                                >
                                    <View style={lstyles.learnCardWrapper}>
                                        <View style={lstyles.learnCardPosition}>
                                                <View style={lstyles.popularTitlesWrapper}>
                                                    <Text style={lstyles.popularTitlesTitle}>{title}</Text>
                                                    <Text style={lstyles.popularTitleDescription}>{modulos}</Text>
                                                    {index === currentIndex && <View>
                                                        {submodulos.map((submodulo => (
                                                            <Text key={submodulo} style={lstyles.textStyle}>{submodulo}</Text>
                                                        )))}
                                                    </View>}
                                                </View>
                                            <View style={{marginLeft: 'auto', flexDirection: 'row', paddingRight: 10}}>
                                                <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={40} color="green"/>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const lstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerboxes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingBottom: 30,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
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
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    infoContainer: {
        backgroundColor: '#BAE5F4',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        flex: 1,
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,

    },
    titlesTitle: {
        fontSize: 20,
        color: 'black',
    },
    popularWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#BAE5F4',
    },
    popularTitlesWrapper: {
        paddingVertical: 5,
    },
    popularTitle: {
        fontSize: 18,
        paddingBottom: 10,
    },
    learnCardWrapper: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingVertical: 5,
        paddingLeft: 20,
        marginVertical: 5,
        paddingVertical: 20,
    },
    learnCardPosition: {
        flexDirection: 'row',
    },
    popularTitlesTitle: {
        fontSize: 14,
    },
    popularTitleDescription: {
        fontSize: 12,
    },
    textStyle: {
        flexWrap: 'wrap',
        marginTop: 5,
        marginRight: 30,
    },

})


