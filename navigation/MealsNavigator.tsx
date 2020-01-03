import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import colors from "../constants/colors";

const MealsNavigator = createStackNavigator({
  Categories: {
      screen: CategoriesScreen
  },
  CategoryMeals: {
      screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerTitle: 'Steakhouse',
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: colors.primaryColor
        },
        headerTintColor: colors.accentColor,
        headerTitleStyle: {
            fontFamily: 'meat',
            fontSize: 30
        }
    } });

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (info) => {
                return <Ionicons
                        color={info.tintColor}
                        size={25}
                        name="ios-restaurant" />
            }
        }},
    Favorites: {screen: FavouritesScreen, navigationOptions:{
            tabBarIcon: (info) => {
                return <Ionicons
                    color={info.tintColor}
                    size={25}
                    name="ios-heart-empty" />
            }
        }
    }}
, {
    tabBarOptions: {
        activeTintColor: colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);