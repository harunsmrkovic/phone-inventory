/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = [];

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);
  switch(action.type) {
    case 'ADD_COLOR': {
      return [...state, { _id: action._id, name: action.colorName }];
    } break;
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
