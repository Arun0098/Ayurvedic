import { ADD_CATEGORY, SET_CATEGORIES } from './action';

const initialState = {
  user: {
    currentUser: {},
    status: '',
    response: '',
    error: '',
    categories: [], // Initialize categories as an empty array
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        user: {
          ...state.user,
          categories: [...state.user.categories, action.payload],
        },
      };
    case SET_CATEGORIES:
      return {
        ...state,
        user: {
          ...state.user,
          categories: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
