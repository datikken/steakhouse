import React from 'react';
import { CATEGORIES } from "../data/dummy-data";
import colors from "../constants/colors";
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const CategoryMeals = ({navigation}) => {

    const catId = navigation.getParam('categoryId');
    //хук достает определенный стэйт из стора
    const availableMeals = useSelector(state => state.meals.filteredMeals );
    const displayed = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return <MealList
                displayed={displayed}
                navigation={navigation} />
};


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