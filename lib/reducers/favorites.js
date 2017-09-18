// @flow

const initialState = [];

const Favorites = ( state = initialState, action = {}) => {

  switch (action.type) {

    case 'favorites/add':
      return [ ...state, action.item ];

    case 'favorites/remove':
      const index = state.indexOf( action.item );
      return [ ...state.slice(0, index), ...state.slice(index+1, state.length) ];

    default:
      return state;
  }

};

export default Favorites;