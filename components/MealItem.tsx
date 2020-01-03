import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

const MealItem = ({onSelectMeal, title, duration, complexity, affordability, image}:
                  {onSelectMeal:any, title: boolean, duration: string, complexity: string, affordability: string, image:string}) => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={onSelectMeal} >
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: image}} style={styles.bgImage} imageStyle={{ borderRadius: 20 }}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.heading}>{title}</Text>
                            <View style={styles.row}>
                                <Text style={styles.title}>{duration}'m</Text>
                                <Text style={styles.title}>{complexity}</Text>
                                <Text style={styles.title}>{affordability}</Text>
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
        justifyContent: 'space-around',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
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
        borderRadius: 20,
        justifyContent: 'flex-end'
    },
    mealItem: {
        height: 300,
        backgroundColor: '#f5f5f5',
        margin: 15,
        borderRadius: 20
    },
    mealRow: {
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: .5,
        shadowOffset: {width:10,height:10},
        shadowRadius: 10,
        elevation: 3
    },
    mealHeader: {
        height: '100%'
    },
    mealDetail: {
        justifyContent: 'space-between'
    }
});

export default MealItem;