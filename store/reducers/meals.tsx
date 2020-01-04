import {MEALS} from "../../data/dummy-data";
import {SET_FILTERS, TOGGLE_FAV} from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAV:
            const index = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
            if(index >= 0) {
                const updatedMeals = [...state.favouriteMeals];
                      updatedMeals.splice(index, 1);

                return {...state, favouriteMeals: updatedMeals};
            } else {
                const favItem = state.meals.find(meal => meal.id === action.mealId);

                return {...state, favouriteMeals: state.favouriteMeals.concat(favItem)}
            }
        case SET_FILTERS:
            const applied = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if(applied.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if(applied.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if(applied.vegetarian && !meal.isVegeterian) {
                    return false
                }
                if(applied.vegan && !meal.isVegan) {
                    return false
                }

                return true;
            });

            return {...state, filteredMeals: updatedFilteredMeals}
        default:
            return state;
    }
    return state;
}

export default mealsReducer;