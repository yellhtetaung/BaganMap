import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import styles from './styles';
import { colors, Icon } from 'components';

import { useDataContext } from 'context';
import { FoundResult } from 'context/types';

interface HomeProps {
    route: any;
    navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const { foundResult } = useDataContext();
    const { start, end } = foundResult as FoundResult;

    return (
        <View style={styles.container}>
            <View style={styles.searchIconContainer}>
                <TouchableOpacity style={styles.searchIconInnerContainer} onPress={() => navigation.navigate('Search')}>
                    <Icon.MaterialCommunityIcons name={'map-search'} size={30} color={colors.black} />
                </TouchableOpacity>
            </View>

            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapView}
                initialRegion={{
                    latitude: 21.1717,
                    longitude: 94.8585,
                    latitudeDelta: start && end ? 0.04 : 10,
                    longitudeDelta: start && end ? 0.05 : 10,
                }}
                showsTraffic={true}
                moveOnMarkerPress={true}
            >
                {start && (
                    <Marker
                        title={start.PagodaMmName}
                        coordinate={{ latitude: start.Latitude, longitude: start.Longitude }}
                    />
                )}
                {end && (
                    <Marker
                        title={end.PagodaMmName}
                        coordinate={{ latitude: end.Latitude, longitude: end.Longitude }}
                    />
                )}
            </MapView>
        </View>
    );
};

export default Home;
