import {View} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import {IData} from "./HomeScreen";
import {FC} from "react";

interface MapScreenProps{
    vehicles: IData[];
}
const MapScreen:FC<MapScreenProps> = ({vehicles}) => {

    return (
        <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
            <MapView   style={{height: "50%", width: "100%"}}>
                {vehicles.map((vehicle: IData) => {
                    console.log(vehicle);
                    return (
                        <Marker title={vehicle.driver} coordinate={{
                            latitude: vehicle.coordinate.latitude, longitude: vehicle.coordinate.longitude,
                        }}></Marker>


                    )
                })}
            </MapView>
        </View>
    );
};

export default MapScreen;
