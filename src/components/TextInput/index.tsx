import React from 'react';
import {
    View,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    Text,
    ViewStyle,
    StyleProp,
    TextStyle,
} from 'react-native';

import styles from './styles';

interface TextInputProps extends RNTextInputProps {
    containerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<TextStyle>;
}

const TextInput: React.FC<TextInputProps> = ({ style, containerStyle, ...props }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <RNTextInput style={[styles.input, style]} {...props} />
        </View>
    );
};

export default TextInput;
