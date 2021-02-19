import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../views/login'
import Home from '../views/home'
import Busca from '../views/busca'

const tab = createBottomTabNavigator()

const Tab = () => {
    return (
        <tab.Navigator initialRouteName="Login" tabBaroptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'green',
            labelStyle: {fontSize: 30}
            }}>
            <tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),}}
            />
            
            <tab.Screen name="Login" component={Login} options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="key" color={color} size={size} />
                ),}}/>

            <tab.Screen name="Busca" component={Busca} options={{
                tabBarLabel: 'Busca',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="map-marker" color={color} size={size} />
                ),}}/>
        </tab.Navigator>
    )
}

export default Tab;