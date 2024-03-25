import React, { useLayoutEffect } from 'react';
import { Image, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';

import { TripOneProps } from './types';
import data from 'libs/data';
import styles from './styles';
import { colors } from 'components';

const { Tbl_TravelRouteListData, Tbl_BaganMapInfoData: baganMapInfo } = data;
const travelData = Tbl_TravelRouteListData[0];

const TripOne: React.FC<TripOneProps> = ({ navigation }) => {
    const pagodas = travelData.PagodaList.map(travel => {
        return baganMapInfo.find(bagan => bagan.Id === travel);
    });

    const coordinate = pagodas.map(pagoda => pagoda && { latitude: pagoda.Latitude, longitude: pagoda.Longitude }) as {
        latitude: number;
        longitude: number;
    }[];

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: travelData.TravelRouteName,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapView}
                initialRegion={{
                    latitude: 21.1717,
                    longitude: 94.8585,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {pagodas.length &&
                    pagodas.map(
                        (pagoda, index) =>
                            pagoda && (
                                <Marker
                                    coordinate={{ latitude: pagoda.Latitude, longitude: pagoda.Longitude }}
                                    key={index.toString()}
                                    onPress={() => navigation.navigate('Details', { id: pagoda.Id })}
                                >
                                    <View style={styles.markerContainer}>
                                        <Text style={styles.markerTitle}>
                                            {index} {pagoda.PagodaMmName}
                                        </Text>
                                        <Image source={require('../../assets/pagoda.png')} style={styles.markerImage} />
                                    </View>
                                </Marker>
                            ),
                    )}

                {coordinate && (
                    <Polyline
                        coordinates={coordinate}
                        strokeWidth={5}
                        strokeColor={colors.deep_secondary}
                        lineCap={'round'}
                        lineJoin={'round'}
                        geodesic={true}
                    />
                )}
            </MapView>
        </View>
    );
};

export default TripOne;
