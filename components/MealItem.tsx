import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import DefaultText from '../components/DefaultText';

const MealItem = ({onSelectMeal, title, duration, complexity, affordability, image}:
                  {onSelectMeal:any, title: string, duration: string, complexity: string, affordability: string, image:string}) => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={onSelectMeal} >
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: image}} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <DefaultText text={title} />
                            <View style={styles.row}>
                                <DefaultText text={duration} />
                                <DefaultText text={complexity} />
                                <DefaultText text={affordability} />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>

        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0, .5)',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    heading: {
        fontSize: 20,
        paddingHorizontal: 15,
        color: 'white'
    },
    title: {
        fontSize: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: 'white',
        textAlign: 'center'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    mealItem: {
        height: 300,
        backgroundColor: '#f5f5f5',
        margin: 15
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '100%'
    },
    mealDetail: {
        justifyContent: 'space-between'
    }
});

export default MealItem;