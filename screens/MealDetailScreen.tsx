import React from 'react';
import { StyleSheet, Text } from 'react-native';
import DetailItem from '../components/DetailItem';
import { MEALS } from "../data/dummy-data";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const selected = MEALS.find(meal => meal.id === mealId)

    return <DetailItem details={selected}/>
};

MealDetailScreen.navigationOptions = (navData) => {
    const mealId = navData.navigation.getParam('mealId')
    const selected = MEALS.find(meal => meal.id === mealId)

    return {
        headerTitle: selected ? selected.title : 'title',
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