
import React from 'react'
import store from '../stores/ProductStore'
import ProductList from '../components/ProductList'
import ProductSearch from '../components/ProductSearch'
import Action from '../actions/ProductAction'

const initialState = {
    products: [],
};

const productStore = store(initialState);

const ProductCatalog = React.createClass({
    getInitialState() {
        return initialState;
    },

    onSearchKeyup(event) {
        const value = event.target.value;

        if (!value) {
            return productStore.dispatch(Action.getProducts());
        }

        return productStore.dispatch(Action.searchProduct(value));
    },

    componentDidMount() {
        productStore.subscribe(() => {
            const state = productStore.getState();

            state.then(value => {
                this.setState(value);
            });
        });

        productStore.dispatch(Action.getProducts());
    },

    render() {
        return (
            <div className="product-catalog">
                <ProductSearch onSearch={this.onSearchKeyup} />

                <ProductList data={this.state} />
            </div>
        );
    },
});

export default ProductCatalog;
