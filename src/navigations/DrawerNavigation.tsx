import React from 'react';
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';

import { Icon, colors } from 'components';

// import screens
import Home from 'screens/Home';
import TripOne from 'screens/Trip_1';
import TripTwo from 'screens/Trip_2';

const Drawer = createDrawerNavigator();

const drawerNavigationOptions: DrawerNavigationOptions = {
    headerStyle: {
        backgroundColor: colors.main,
    },
    headerTitleStyle: {
        fontFamily: 'NotoSansMyanmar-Bold',
        fontSize: 22,
        color: colors.black,
    },
};

const homeDrawerOptions: DrawerNavigationOptions = {
    headerShown: true,
    headerTitle: 'Bagan Tourism',
    drawerLabel: 'ပင်မစာမျက်နှာ',
    drawerIcon: props => <Icon.AntDesign name={'home'} {...props} />,
};

const tripOne: DrawerNavigationOptions = {
    headerShown: true,
    drawerLabel: 'ခရီးစဉ် - ၁',
    drawerIcon: props => <Icon.FontAwesome5 name={'map-signs'} {...props} />,
};

const tripTwo: DrawerNavigationOptions = {
    headerShown: true,
    drawerLabel: 'ခရီးစဉ် - ၂',
    drawerIcon: props => <Icon.FontAwesome5 name={'map-signs'} {...props} />,
};

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={drawerNavigationOptions}>
            <Drawer.Screen name={'Home'} component={Home} options={homeDrawerOptions} />
            <Drawer.Screen name={'TripOne'} component={TripOne} options={tripOne} />
            <Drawer.Screen name={'TripTwo'} component={TripTwo} options={tripTwo} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
