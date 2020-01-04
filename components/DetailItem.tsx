import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

const DetailItem = ({details}) => {
    return (
        <ScrollView>
            <View>
                <Text style={styles.heading}>{details.steps}</Text>
                <View style={styles.column}>
                    {details.ingredients.map(item => (
                       <Text
                           style={styles.text}
                           key={item}>{item}</Text>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    heading: {
        color: 'black',
        padding: 20
    },
    column: {
        flexDirection: 'column',
        padding: 20
    },
    text: {
        marginBottom: 5
    }
});

export default DetailItem;