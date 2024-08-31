export const ADD_CATEGORY = 'ADD_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});