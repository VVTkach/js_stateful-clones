'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  let currentState = { ...state };
  const result = [];

  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        currentState = {
          ...currentState, ...action.extraData,
        };
        break;

      case 'removeProperties':
        currentState = Object.keys(currentState)
          .filter(key => !action.keysToRemove.includes(key))
          .reduce((newState, key) => {
            newState[key] = currentState[key];

            return newState;
          }, {});
        break;

      case 'clear':
        currentState = {};
        break;
    }
    result.push(currentState);
  });

  return result;
}

module.exports = transformStateWithClones;
