export const TOGGLE_FAV = 'TOGGLE_FAV';

export const toggleFavourite = (id) => {
    return { type: TOGGLE_FAV, mealId: id }
};