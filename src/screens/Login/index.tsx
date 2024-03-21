import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const imageBg = require('../../assets/background.jpeg');

interface LoginProps {
    navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
    return (
        <ImageBackground source={imageBg} style={styles.container} blurRadius={3}>
            <View style={styles.innerContainer}>
                <View style={styles.loginBox}>
                    <Text style={styles.title}>Bagan Map</Text>
                    <Text style={styles.description}>ခရီးစဉ်လေးတွေရွေးမယ် လည်မယ် ပတ်မယ်။</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.replace('Drawer')}>
                <Text style={styles.buttonTitle}>Go to home</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default Login;
