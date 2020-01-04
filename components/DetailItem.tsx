import React from 'react';
import ProgressiveImage from '../components/ProgressiveImage';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native';

const w = Dimensions.get('window');

const DetailItem = ({details}) => {

    console.log(details)

    return (
        <ScrollView>
            <View>
                <ProgressiveImage
                    thumbnailSource={{ uri: details.imageUrl }}
                    source={{ uri: details.imageUrl }}
                    style={{ width: w.width, height: w.width }}
                    resizeMode="cover"
                />
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