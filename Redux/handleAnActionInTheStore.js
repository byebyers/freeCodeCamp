//Handle an Action in the Store

/*

*/

/*

*/

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  if (state.login == false) {
    state.login == true
    console.log(state);
    return state
  }
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
