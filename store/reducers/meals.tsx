import {MEALS} from "../../data/dummy-data";
import {TOGGLE_FAV} from "../actions/meals";

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
        default:
            return state;
    }
    return state;
}

export default mealsReducer;