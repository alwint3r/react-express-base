'use strict';

import { createStore } from 'redux'

export default function(defaultState) {
    function reducer(state, action) {
        if (action.type === 'GET_PRODUCTS') {
            return fetch('/products')
                .then(response => {
                    return response.json();
                })
                .then(products => {
                    return {
                        products: products.data,
                    };
                });
        }
    }

    return createStore(reducer, defaultState);
};
