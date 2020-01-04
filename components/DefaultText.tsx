import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = props => {
    return  <Text style={{ ...props.style }}>{props.children}</Text>
};

export default DefaultText;
