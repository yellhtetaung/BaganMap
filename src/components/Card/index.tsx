import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import { CardHeaderProps, CardProps, CardTitleProps } from './types';

export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...props }) => {
    return <View {...props}>{children}</View>;
};

export const CardTitle: React.FC<CardTitleProps> = ({ children, style, ...props }) => {
    return (
        <Text style={[styles.title, style]} {...props}>
            {children}
        </Text>
    );
};

export const Card: React.FC<CardProps> = ({ children, style, ...props }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} {...props}>
            {children}
        </TouchableOpacity>
    );
};
