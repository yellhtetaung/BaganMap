import { colors } from 'components';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    mapView: {
        width: '100%',
        height: '100%',
    },

    markerContainer: {
        alignItems: 'center',
        gap: 10,
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
