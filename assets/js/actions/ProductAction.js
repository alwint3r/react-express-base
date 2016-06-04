'use strict';

export default {
    getProducts() {
        return {
            type: 'GET_PRODUCTS',
        };
    },

    searchProduct(keyword) {
        return {
            type: 'SEARCH_PRODUCTS',
            param: keyword,
        };
    },
};
