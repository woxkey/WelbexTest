import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {DetailsScreenRouteProp} from "../navigation/types";
import {useTranslation} from "react-i18next";
import MapView, {Marker} from "react-native-maps";

const DetailScreen = () => {
    const route = useRoute<DetailsScreenRouteProp>();
    const {driver, category, phone, coordinate} = route.params;
    const {t} = useTranslation();

    return (<View style={{flex: 1, paddingTop: 12, paddingHorizontal: 10}}>
            <MapView region={{latitude: coordinate.latitude, longitude: coordinate.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01}}
                     style={{height: "50%", width: "100%"}}>
                <Marker  coordinate={coordinate}>
                </Marker>
            </MapView>
            <Text>{t('category')}: {t(category)}</Text>
            <Text>{t('driver')}: {driver}</Text>
            <Text>{t('phone')}: {phone}</Text>
        </View>);
};

export default DetailScreen;
