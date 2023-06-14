import {Text, View} from 'react-native';
import MapView, {Marker} from "react-native-maps";
const MapScreen = () => {

    return (
        <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
            <MapView   style={{height: "50%", width: "100%"}}>
                <Marker coordinate={
                    {latitude: 51.160522,
                    longitude: 71.470360,
                    }
                }>

                </Marker>
            </MapView>
        </View>
    );
};

export default MapScreen;
