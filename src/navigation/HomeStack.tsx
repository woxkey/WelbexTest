import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {HomeStackNavigatorParamList} from "./types";
import {useTranslation} from "react-i18next";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
    const {t} = useTranslation();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" options={{title: t("home") || "Home"}} component={HomeScreen} />
            <HomeStack.Screen name="Details" options={{title: t("details") || "Details"}} component={DetailsScreen} />
        </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;