import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { colors } from 'components';

// import screens
import Login from 'screens/Login';
import DrawerNavigation from './DrawerNavigation';
import Details from 'screens/Details';
import Search from 'screens/Search';

const Stack = createStackNavigator();

const stackNavigationOptions: StackNavigationOptions = {
    headerStyle: {
        backgroundColor: colors.main,
    },
    headerTitleStyle: {
        fontFamily: 'NotoSansMyanmar-Bold',
        fontSize: 22,
        color: colors.black,
    },
    headerShown: false,
};

const loginStackScreenOptions: StackNavigationOptions = {
    headerShown: false,
};

const detailStackScreenOptions: StackNavigationOptions = {
    headerShown: true,
};

const searchStackScreenOptions: StackNavigationOptions = {
    headerShown: true,
    headerTitle: 'ဘုရားစေတီများ ရှာရန်',
    headerTitleStyle: {
        fontSize: 18,
        fontFamily: 'NotoSansMyanmar-Bold',
        color: colors.black,
    },
};

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={'Login'} screenOptions={stackNavigationOptions}>
            <Stack.Screen name={'Login'} component={Login} options={loginStackScreenOptions} />
            <Stack.Screen name={'Drawer'} component={DrawerNavigation} />
            <Stack.Screen name={'Search'} component={Search} options={searchStackScreenOptions} />
            <Stack.Screen name={'Details'} component={Details} options={detailStackScreenOptions} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
