'use strict';

import { createStore } from 'redux'

export default function(defaultState) {
    function reducer(state, action) {
        if (action.type === 'GET_PRODUCTS') {
            return fetch('/products')
                .then(response => response.json())
                .then(products => {
                    return {
                        products: products.data,
                    };
                });
        } else if (action.type === 'SEARCH_PRODUCTS') {
            if (action.param) {
                const search = encodeURIComponent(action.param);
                return fetch('/products?search=' + search)
                    .then(response => response.json())
                    .then(products => {
                        return {
                            products: products.data,
                        };
                    });
            }
        }
    }

    return createStore(reducer, defaultState);
};
