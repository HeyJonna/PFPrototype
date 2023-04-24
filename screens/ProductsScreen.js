import React from 'react';
import { 
    View, 
    SafeAreaView, 
    Image, 
    StyleSheet, 
    Text, 
    FlatList,
    ScrollView
} from 'react-native';
import banksData from '../assets/data/banksData';
import productsData from '../assets/data/productsData';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ProductsScreen = () => {
    
    const renderbanks = ({ item }) => {
        return (
            <View style={[styles.categoryItemWrapper, {
                backgroundColor: item.selected ? '#BAE5F4':'white',
                marginLeft: item.id == 1 ? 20 : 0,
            }]}>
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.selected ? 'white' : '#77DD77',
                }]}>
                    <MaterialCommunityIcons name="arrow-right-thin" 
                        size={8} style={styles.categorySelectIcon} 
                        color={item.selected ? 'black':'white'}
                    />
                </View>
            </View>
        )
    }

    
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Header */}
                <SafeAreaView>
                    <View style={styles.headerboxes}>
                            <View style={styles.headerWrapper}>
                                <Image
                                    source={require('../assets/images/profile.jpg')}
                                    style={styles.profileImage}
                                />
                            </View>
                            <View style={styles.headeruser}>
                                <Text style={styles.hellotext}> Hola de nuevo,</Text>
                                <Text style={styles.username}> Jonathan Martinez </Text>
                            </View>
                            <View style={styles.headerNotification}>
                                <MaterialCommunityIcons name="bullhorn-outline" size={30} color= 'black'/>
                            </View>
                        </View>
                </SafeAreaView>
                {/* Titles */}
                <View style={styles.titlesWrapper}>
                    <Text style={styles.titlesSubtitle}>Productos</Text>
                    <Text style={styles.titlesTitle}>Financieros</Text>
                </View>
        
                {/* Categories */}
                <View style={styles.categoriesWrapper}>
                    <Text style={styles.categoriesTitle}>Bancos</Text>
                    <View style={styles.categoriesListWrapper}>
                        <FlatList
                            data={banksData}
                            renderItem={renderbanks}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                        />
                    </View>
                </View>

                {/* BankProducts*/}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Servicios</Text>
                    {productsData.map((item) => (
                        <View style={[styles.popularCardWrapper,{
                            marginTop: item.id == 1 ? 10:20,
                        },
                        ]}>
                            <View>
                                <View>
                                    <View style={styles.popularTitlesWrapper}>
                                        <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                        <Text style={styles.popularTitleDescription}>{item.description}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.moreinfoBottom}>
                                            <MaterialCommunityIcons name='plus' size={10} color='white' />
                                            <Text style={styles.moreinfo}>{item.more}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.popularCardRight}>
                                    <Image source={item.image} style={styles.popularCardImage}/>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
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
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubtitle: {
        fontFamily: 'Arial',
        fontSize: 16,
        color: 'grey',
    },
    titlesTitle: {
        fontFamily: 'Arial',
        fontSize: 32,
        color: 'black',
    },
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: 'Arial',
        fontSize: 16,
        paddingHorizontal: 20,
        color: 'grey',
    },
    categoriesListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: 'grey',
        marginRight: 20,
        borderRadius: 20,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Arial',
        fontSize: 14,
        marginTop: 10,
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
    },
    categorySelectIcon: {
        alignSelf: 'center',

    },
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontSize: 16,
    },
    popularCardWrapper: {
        backgroundColor: 'white',
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    popularTitlesWrapper: {
        marginTop: 0,
    },
    popularTitlesTitle: {
        fontSize: 14,
    },
    popularTitleDescription: {
        fontSize: 12,
        marginTop: 5,
        flex: 1,
        flexWrap: 'wrap',
        marginRight: 120,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    moreinfoBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4EB653',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    moreinfo: {
        marginLeft: 5,
        color: 'white',
    },
    popularCardRight: {
        marginLeft: 200,
        marginTop: -100,
    },
    popularCardImage: {
        width: 110,
        height: 100,
        resizeMode: 'contain',

    },
});



