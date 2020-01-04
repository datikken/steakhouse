import React from 'react';
import {StyleSheet, View} from "react-native";
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../components/HeaderButton";
import {useSelector} from "react-redux";

const FavouritesScreen = ({navigation}) => {
    //хук достает определенный стэйт из стора
    const favMeals = useSelector(state => state.meals.favouriteMeals );
    if(favMeals.length === 0) {
        return (
            <View style={styles.notFound}>
                <DefaultText>
                    No favourites yet :(
                </DefaultText>
            </View>
        );
    }

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

const styles = StyleSheet.create({
    notFound: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    }
});

export default FavouritesScreen;