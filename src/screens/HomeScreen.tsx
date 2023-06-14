import {StyleSheet, View, Text, Pressable, FlatList, Button} from 'react-native';
import { NavigatorScreenParams, useNavigation} from '@react-navigation/native';
import createStackNavigator from "react-native-screens/createNativeStackNavigator";
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { StackNavigationProp } from '@react-navigation/stack';
import {HomeScreenNavigationProp} from "../navigation/types";
import DATA from "../db/vehicles.json";
import {useTranslation} from "react-i18next";
import React, {useState} from "react";


interface IData {
    vehicleId: number,
    category: string,
    driver: string,
}

interface IMyData {
    item: IData;
}



const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const {t} = useTranslation();
    const [vehicles, setVehicles] = useState(DATA);
    const [sort, setSort] = useState(true);

    const handleButton = () => {
        const sortedVehicles = [...vehicles].sort((a, b) => {
            return sort ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category)
        })
        setSort(!sort);
        setVehicles(sortedVehicles);
    }

    const renderListItems = ({ item }: IMyData) => {
        return (
            <Pressable
                onPress={() =>
                    navigation.navigate("Details", {
                        name: item.category,
                        birthYear: item.vehicleId,
                    })
                }
            >
                <Text
                    style={{ fontSize: 18, paddingHorizontal: 12, paddingVertical: 12 }}
                >
                    {t("vehicle")}#{item.vehicleId}
                </Text>
                <Text
                    style={{ fontSize: 18, paddingHorizontal: 12, paddingVertical: 12 }}
                >
                    {t("driver")}: {item.driver}
                </Text>
                <Text
                    style={{ fontSize: 18, paddingHorizontal: 12, paddingVertical: 12 }}
                >
                    {t("category")}: {item.category}
                </Text>
                <View
                    style={{
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: '#ccc',
                    }}
                />
            </Pressable>
        );
    };

    return (
        <View style={{ flex: 1, paddingTop: 10 }}>
            <Button title={"Применить"} accessibilityLabel="Применить" onPress={handleButton}/>
            <FlatList data={vehicles} renderItem={renderListItems} />
        </View>
    );
};

export default HomeScreen;

