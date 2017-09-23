// @flow

const initialState = {
  logged_in: false
};

const Accounts = ( state = initialState, action = {}) => {

  switch (action.type) {

    case 'accounts/login':
      return { logged_in: true };

    case 'accounts/logout':
      return { logged_in: false };

    default:
      return state;
  }

};

export default Accounts;