import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

const CustomHeaderButton = props => {
    return <HeaderButton {...props}
                         iconSize={23}
                         color={Colors.accentColor}
                         IconComponent={Ionicons} />
};

export default CustomHeaderButton;