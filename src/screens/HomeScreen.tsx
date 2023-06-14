import {StyleSheet, View, Text, Pressable, FlatList, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {HomeScreenNavigationProp} from "../navigation/types";
import DATA from "../db/vehicles.json";
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import {Dropdown} from "react-native-element-dropdown";
import AntDesign from '@expo/vector-icons/AntDesign';

export interface ICoordinate {
    longitude: number,
    latitude: number,
}
interface IData {
    vehicleId: number,
    category: string,
    driver: string,
    phone: string,
    coordinate: ICoordinate
}
interface IMyData {
    item: IData;
}

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const {t} = useTranslation();
    const [vehicles, setVehicles] = useState(DATA);
    const [value, setValue] = useState<any>(null);
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: t("cargo"), value: 'cargo' },
        { label: t("passenger"), value: 'passenger' },
        { label: t("special"), value: 'special' },
    ];

    const handleButton = () => {
        if (!value) return;
        const filtered = DATA.filter(vehicle => vehicle.category === value)
        setVehicles(filtered)
    }

    const renderListItems = ({ item }: IMyData) => {
        return (
            <Pressable
                onPress={() =>
                    navigation.navigate("Details", {
                        driver: item.driver,
                        category: item.category,
                        phone: item.phone,
                        coordinate: item.coordinate
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
                    {t("category")}: {t(`${item.category.toLowerCase()}`)}
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
        <View style={{ flex: 1, paddingTop: 10, marginHorizontal: 10 }}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? t("select") || "Select item" : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
            <Button title={t("apply")} accessibilityLabel="Применить" onPress={handleButton}/>
            <FlatList data={vehicles} renderItem={renderListItems} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});