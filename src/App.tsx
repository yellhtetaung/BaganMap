import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from 'navigations/StackNavigation';
import 'react-native-gesture-handler';

import AppContextProvider from 'context';

const App = () => {
    return (
        <AppContextProvider>
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
        </AppContextProvider>
    );
};

export default App;
