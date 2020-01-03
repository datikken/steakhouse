import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const DetailItem = (details) => {
    return (
        <View>
            <Text style={styles.heading}>{details.details.steps}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        color: 'black',
        padding: 20
    }
});

export default DetailItem;