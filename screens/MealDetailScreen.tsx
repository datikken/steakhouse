import React from 'react';
import { StyleSheet } from 'react-native';
import DetailItem from '../components/DetailItem';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import {useSelector} from 'react-redux';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const allMeals = useSelector(state => state.meals.meals );

    const selected = allMeals.find(meal => meal.id === mealId)

    return <DetailItem details={selected}/>
};

MealDetailScreen.navigationOptions = (navData) => {
    const mealTitle = navData.navigation.getParam('mealTitle');

    return {
        headerTitle: mealTitle,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favourite"
                    iconName='ios-heart-empty'
                    onPress={() => {
                    console.log('Mark as favourite.')}
                }/>
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    color: {
        paddingRight: 20,
        color: 'yellow'
    }
});

export default MealDetailScreen;