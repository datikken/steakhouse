import React from 'react';
import {MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';


const FavouritesScreen = ({navigation}) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return <MealList displayed={favMeals} navigation={navigation} />
};

FavouritesScreen.navigationOptions = {
    headerTitle: 'Favourites'
};

export default FavouritesScreen;