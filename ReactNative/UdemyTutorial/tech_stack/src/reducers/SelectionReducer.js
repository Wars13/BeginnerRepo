//very first time reducer runs, return some non undefined value from the reducer.
//first time it runs, state will be called with value 'undefined', so set it to null.
//so this sets to null if it is undefined.
//i.e when user doen't touch on any library at the app start time, make it null.
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state; //return whatever the state was already in.
  }
};
