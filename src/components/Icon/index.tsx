import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IconProps {
    name: string;
    size: number;
    color: string;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => <AntDesign name={name} {...props} />;

export default Icon;
