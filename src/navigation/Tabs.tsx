import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorParamList } from './types';
import HomeStackNavigator from './HomeStack';
import SettingsScreen from '../screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from "react-i18next";


const Tab: any = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
    const { t } = useTranslation();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeStack') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStackNavigator}
                options={{ headerShown: false, title: t("home") }}
            />
            <Tab.Screen name="Settings" options={{title: t("settings")}} component={SettingsScreen}  />
        </Tab.Navigator>
    );
};

export default BottomTabs;