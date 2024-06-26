import { StyleSheet } from 'react-native';

import { colors } from 'components';

export default StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },

    searchIconContainer: {
        width: '100%',

        position: 'absolute',
        bottom: 20,
        left: 0,
        zIndex: 100,

        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    searchIconInnerContainer: {
        backgroundColor: colors.white,
        borderRadius: 100,
        elevation: 10,

        padding: 15,
    },

    mapView: {
        width: '100%',
        height: '100%',
    },

    markerContainer: {
        alignItems: 'center',
    },

    markerTitle: {
        fontSize: 12,
        fontFamily: 'NotoSansMyanmar-Bold',
        color: colors.black,
        backgroundColor: colors.white,
        borderRadius: 10,

        padding: 10,
        paddingHorizontal: 20,
    },

    markerImage: {
        width: 40,
        height: 40,
    },
});
