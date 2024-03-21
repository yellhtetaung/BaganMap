import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import { colors } from 'components';

interface HomeProps {
    route: any;
    navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchIconContainer}>
                <TouchableOpacity style={styles.searchIconInnerContainer} onPress={() => navigation.navigate('Search')}>
                    <MaterialCommunityIcons name={'map-search'} size={30} color={colors.black} />
                </TouchableOpacity>
            </View>

            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapView}
                initialRegion={{
                    latitude: 21.1641639266817,
                    longitude: 94.8661667747142,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
};

export default Home;
