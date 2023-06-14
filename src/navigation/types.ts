import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
    Home: undefined;
    Details: {
        driver: string;
        category: string;
        phone: string,
        coordinate: ICoordinate
    };
};


// export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, "Details">
export type HomeScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<BottomTabNavigatorParamList, "Feed">, any>

import type {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {ICoordinate} from "../screens/HomeScreen";

export type DetailsScreenRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'Details'
>;

export type BottomTabNavigatorParamList = {
    Home: HomeStackNavigatorParamList;
    Feed: undefined;
    Settings: undefined;
};