import React from 'react';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../components/HeaderButton";
import {useSelector} from "react-redux";


const FavouritesScreen = ({navigation}) => {
    //хук достает определенный стэйт из стора
    const favMeals = useSelector(state => state.meals.favouriteMeals );

    return <MealList displayed={favMeals} navigation={navigation} />
};

FavouritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Favourites',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    color="red"
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {console.log(navData.navigation.toggleDrawer())}} />
            </HeaderButtons>
    }
};

export default FavouritesScreen;