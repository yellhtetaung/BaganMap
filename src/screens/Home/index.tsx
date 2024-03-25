import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';
import { colors, Icon } from 'components';
import { useDataContext } from 'context';

interface HomeProps {
    route: any;
    navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const { foundResult } = useDataContext();
    const mapRef = useRef<MapView>(null);

    useEffect(() => {
        if (foundResult) {
            mapRef.current?.animateToRegion({
                latitude: foundResult.Latitude,
                longitude: foundResult.Longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        }
    }, [foundResult]);

    return (
        <View style={styles.container}>
            <View style={styles.searchIconContainer}>
                <TouchableOpacity style={styles.searchIconInnerContainer} onPress={() => navigation.navigate('Search')}>
                    <Icon.MaterialCommunityIcons name={'map-search'} size={30} color={colors.black} />
                </TouchableOpacity>
            </View>

            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.mapView}
                initialRegion={{
                    latitude: 21.1717,
                    longitude: 94.8585,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onRegionChangeComplete={region => console.log(region)}
                showsTraffic={true}
                moveOnMarkerPress={true}
            >
                {foundResult && (
                    <Marker
                        coordinate={{ latitude: foundResult.Latitude, longitude: foundResult.Longitude }}
                        tracksViewChanges={true}
                        tracksInfoWindowChanges={true}
                        onPress={() => navigation.navigate('Details', { id: foundResult.Id })}
                    >
                        <View style={styles.markerContainer}>
                            <Text style={styles.markerTitle}>{foundResult.PagodaMmName}</Text>
                            <Image source={require('../../assets/pagoda.png')} style={styles.markerImage} />
                        </View>
                    </Marker>
                )}
            </MapView>
        </View>
    );
};

export default Home;
