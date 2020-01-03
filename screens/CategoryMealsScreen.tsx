import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import {CATEGORIES, MEALS} from "../data/dummy-data";
import colors from "../constants/colors";
import MealItem from '../components/MealItem';

const CategoryMeals = ({navigation}) => {
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

    const catId = navigation.getParam('categoryId');
    const selected = CATEGORIES.find(cat => cat.id === catId);
    const displayed = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

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


CategoryMeals.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCat = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCat.title,
        headerStyle: {
            backgroundColor: colors.primaryColor
        },
        headerTintColor: colors.accentColor,
        headerTitleStyle: {
            fontFamily: 'meat',
            fontSize: 30
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMeals;