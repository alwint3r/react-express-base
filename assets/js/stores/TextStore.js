'use strict';

import { createStore } from 'redux';

const defaultState = { name: '' };

function textReducer(state, action) {
    if (action.type === 'CHANGE_TEXT') {
        return {
            name: action.text,
        };
    }

    return defaultState;
}

export default createStore(textReducer, defaultState);
