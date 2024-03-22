import type { TextProps, TouchableOpacityProps, ViewProps } from 'react-native';

export interface CardProps extends TouchableOpacityProps {
    children: React.ReactNode;
}

export interface CardHeaderProps extends ViewProps {
    children: React.ReactNode;
}

export interface CardTitleProps extends TextProps {
    children: React.ReactNode;
}
