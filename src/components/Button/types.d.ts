import { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
    label: string;
    labelStyle?: StyleProp<TextStyle>;
}
