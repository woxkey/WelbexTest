import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
    Home: undefined;
    Details: {
        name: string;
        birthYear: string;
    };
};


// export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, "Details">
export type HomeScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<BottomTabNavigatorParamList, "Feed">, any>

import type {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";

export type DetailsScreenRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'Details'
>;

export type BottomTabNavigatorParamList = {
    Home: HomeStackNavigatorParamList;
    Feed: undefined;
    Settings: undefined;
};