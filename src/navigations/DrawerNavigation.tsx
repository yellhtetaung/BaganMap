import React from 'react';
import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';

import { Icon, colors } from 'components';

// import screens
import Home from 'screens/Home';

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
    drawerIcon: props => <Icon name={'home'} {...props} />,
};

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={drawerNavigationOptions}>
            <Drawer.Screen name={'Home'} component={Home} options={homeDrawerOptions} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
