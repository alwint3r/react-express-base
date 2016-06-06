'use strict';

export default {
    getProducts() {
        return {
            type: 'GET_PRODUCTS',
            promise: () => {
                return fetch('/products')
                    .then(response => response.json())
                    .then(products => {
                        return {
                            products: products.data,
                        };
                    });
            },
        };
    },

    searchProduct(keyword) {
        return {
            type: 'SEARCH_PRODUCTS',
            promise: () => {
                const search = encodeURIComponent(keyword);

                return fetch('/products?search=' + search)
                    .then(response => response.json())
                    .then(products => {
                        return {
                            products: products.data,
                        };
                    });
            },
        };
    },
};
