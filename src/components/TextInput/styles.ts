import { StyleSheet } from 'react-native';
import colors from '../colors';

export default StyleSheet.create({
    container: {
        padding: 10,
    },

    label: {
        fontSize: 18,
        fontFamily: 'NotoSansMyanmar-Bold',
        color: colors.black,
    },

    input: {
        backgroundColor: colors.secondary,
        color: colors.white,
        fontSize: 16,

        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 100,
        elevation: 5,
    },
});
