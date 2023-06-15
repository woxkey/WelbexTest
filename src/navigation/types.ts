import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import type {RouteProp} from '@react-navigation/native';
import {ICoordinate} from "../screens/HomeScreen";

export type HomeStackNavigatorParamList = {
    Home: undefined;
    Details: {
        driver: string;
        category: string;
        phone: string,
        coordinate: ICoordinate
    };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, "Details">

export type DetailsScreenRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'Details'
>;