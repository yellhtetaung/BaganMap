import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';
import { Button } from 'components';

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

            <Button
                label={'Go to home'}
                onPress={() => navigation.navigate('Drawer')}
                labelStyle={styles.buttonTitle}
            />
        </ImageBackground>
    );
};

export default Login;
