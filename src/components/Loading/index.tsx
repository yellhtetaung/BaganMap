import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles.ts';

import animation from 'assets/animations/loading.json';

export default function Loading() {
    return (
        <View style={styles.container}>
            <LottieView source={animation} autoPlay={true} loop={true} style={styles.animation} />
        </View>
    );
}
