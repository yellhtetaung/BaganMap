import { colors } from 'components';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    fullContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contentContainer: {
        padding: 20,
    },

    title: {
        fontSize: 20,
        fontFamily: 'NotoSansMyanmar-Black',
        color: colors.black,
    },

    text: {
        fontSize: 16,
        fontFamily: 'NotoSansMyanmar-Regular',
        color: colors.black,
    },
});
