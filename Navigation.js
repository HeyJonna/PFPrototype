import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//screens
import LearnScreen from './screens/LearnScreen';
import ProductsScreen from './screens/ProductsScreen';
import IDScreen from './screens/IDScreen';
import WalletScreen from './screens/WalletScreen'
import Transaction1 from './screens/Transaction1';
import LogoScreen from './screens/LogoScreen';
import InfCuenta from './screens/InfTCuentaScreen';
import QrScreen from './screens/qrScreen';

const walletStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <walletStackNavigator.Navigator>
            <walletStackNavigator.Screen
            name='WalletScreen'
            component={WalletScreen}
            options={{headerShown: false}}
            />
            <walletStackNavigator.Screen
            name='Transacción'
            component={Transaction1}
            options={{headerBackTitleVisible: false}}
            />
        </walletStackNavigator.Navigator>
    )
}

function MyCompany() {
    return (
        <walletStackNavigator.Navigator>
            <walletStackNavigator.Screen
            name='IDScreen'
            component={IDScreen}
            options={{headerShown: false}}
            />
            <walletStackNavigator.Screen
            name='FIES'
            component={LogoScreen}
            options={{headerBackTitleVisible: false}}
            />
            <walletStackNavigator.Screen
            name='Información'
            component={InfCuenta}
            options={{headerBackTitleVisible: false}}
            />
            <walletStackNavigator.Screen
            name='QR'
            component={QrScreen}
            options={{headerBackTitleVisible: false}}
            />
        </walletStackNavigator.Navigator>
    )

}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
            initialRouteName='Wallet'
            screenOptions={{
                tabBarActiveTintColor: '#BAE5F4',
                tabBarInactiveTintColor: 'black',
            }}
        >
            <Tab.Screen 
                name="Wallet" 
                component={MyStack}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="wallet-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
                 
            />
            <Tab.Screen 
                name="Learn" 
                component={LearnScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-open-page-variant-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }} 
            />
            <Tab.Screen 
                name="ID" 
                component={MyCompany}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="badge-account-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
                 
            />
    </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}