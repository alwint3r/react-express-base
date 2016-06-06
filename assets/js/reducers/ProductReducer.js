
const initialState = {
    products: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                products: action.result.products,
            };
        case 'SEARCH_PRODUCTS':
            return {
                products: action.result.products,
            };
        default:
            return state;
    }
};
