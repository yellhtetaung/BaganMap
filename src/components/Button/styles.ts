import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
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
        fontSize: 16,
        fontFamily: 'NotoSansMyanmar-Bold',

        textAlign: 'center',
    },
});
