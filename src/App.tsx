import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from 'navigations/StackNavigation';
import 'react-native-gesture-handler';

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
};

export default App;
