import React from 'react';
import { CATEGORIES } from "../data/dummy-data";
import colors from "../constants/colors";
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import {View, StyleSheet} from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMeals = ({navigation}) => {

    const catId = navigation.getParam('categoryId');
    //хук достает определенный стэйт из стора
    const availableMeals = useSelector(state => state.meals.filteredMeals );
    const displayed = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if(displayed.length === 0) {
        return (
            <View style={styles.notFound}>
                <DefaultText style={{marginBottom: 10}}>No meals found. :(</DefaultText>
                <DefaultText>Try to check your filters.</DefaultText>
            </View>
        );
    }

    return <MealList
                displayed={displayed}
                navigation={navigation} />
};

const styles = StyleSheet.create({
    notFound: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    }
});

CategoryMeals.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCat = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCat ? selectedCat.title : 'title',
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

export default CategoryMeals;