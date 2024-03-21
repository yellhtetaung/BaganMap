import { StyleSheet } from 'react-native';
import { colors } from 'components';

export default StyleSheet.create({
    container: {
        flex: 1,
        objectFit: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',

        padding: 20,
    },

    innerContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    loginBox: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        elevation: 10,

        padding: 20,
        paddingHorizontal: 40,
        paddingVertical: 50,
    },

    title: {
        color: colors.white,
        fontFamily: 'NotoSansMyanmar-Black',
        fontSize: 35,
        textAlign: 'center',
        letterSpacing: 1,
        textTransform: 'uppercase',
        textShadowColor: colors.deep_secondary,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },

    description: {
        color: colors.black,
        fontFamily: 'NotoSansMyanmar-Regular',
        fontSize: 16,
        textAlign: 'center',
    },

    button: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        elevation: 5,

        padding: 10,
        paddingHorizontal: 40,
        marginBottom: 30,
    },

    buttonTitle: {
        color: colors.black,
        fontSize: 18,
        fontFamily: 'NotoSansMyanmar-Bold',

        textAlign: 'center',
    },
});
