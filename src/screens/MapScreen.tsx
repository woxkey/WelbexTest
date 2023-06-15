import {View} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import {IData} from "./HomeScreen";
import React, {FC} from "react";

interface MapScreenProps {
    vehicles: IData[];
}

const MapScreen: FC<MapScreenProps> = ({vehicles}) => {

    return (<View style={{flex: 1, paddingTop: 10}}>
            <MapView style={{height: "100%", width: "100%"}}>
                {vehicles.map((vehicle: IData) => {
                    return (<Marker key={vehicle.vehicleId}
                                    pinColor={vehicle.category === "cargo" ? "yellow" : vehicle.category === "special" ? "red" : "blue"}
                                    title={vehicle.driver} coordinate={{
                            latitude: vehicle.coordinate.latitude, longitude: vehicle.coordinate.longitude,
                        }}/>)
                })}
            </MapView>
        </View>);
};

export default MapScreen;
