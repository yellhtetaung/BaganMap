import { colors } from 'components';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    innerContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },

    contentContainerStyle: {
        padding: 20,
    },

    resultContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },

    cardContainer: {
        borderRadius: 100,
    },

    cardTitle: {
        color: colors.white,
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',

        padding: 20,
    },

    buttonStyle: {
        borderRadius: 100,
    },

    buttonLableStyle: {
        color: colors.white,
    },
});
