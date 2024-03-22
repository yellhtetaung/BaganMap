/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from './types';
import styles from './styles';

const Button: React.FC<ButtonProps> = ({ label, style, labelStyle, ...props }) => {
    return (
        <TouchableOpacity style={[styles.button, { opacity: props.disabled ? 0.7 : 1 }, style]} {...props}>
            <Text style={[styles.buttonTitle, labelStyle]}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Button;
