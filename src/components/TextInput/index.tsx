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
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<TextStyle>;
}

const TextInput: React.FC<TextInputProps> = ({ label, style, labelStyle, containerStyle, ...props }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
            <RNTextInput style={[styles.input, style]} {...props} />
        </View>
    );
};

export default TextInput;
