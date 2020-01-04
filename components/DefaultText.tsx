import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from "../constants/colors";

const DefaultText = ({text}: {text:string}) => {
    return <Text style={styles.text}>{text}</Text>
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        padding: 5
    }});

export default DefaultText;
