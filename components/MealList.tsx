import React from 'react';
import { FlatList, StyleSheet,View } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = ({displayed, navigation}) => {
    const renderMealItem = ({item}) => {
        return <MealItem
            image={item.imageUrl}
            affordability={item.affordability}
            complexity={item.complexity}
            duration={item.duration}
            title={item.title}
            onSelectMeal={() => {
                navigation.navigate({routeName: 'MealDetail', params: {
                        mealId: item.id
                    } })
            }} />
    }
    return (
        <View style={styles.screen}>
            <FlatList
                style={{width: '100%' }}
                data={displayed}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
            >
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;