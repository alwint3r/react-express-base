
import React from 'react'
import { Provider } from 'react-redux'
import ProductList from '../components/ProductList'
import ProductSearch from '../components/ProductSearch'

const initialState = {
    products: [],
};

const ProductCatalog = React.createClass({
    render() {
        return (
            <Provider store={this.props.store}>
                <div className="product-catalog">
                    <ProductSearch />

                    <ProductList />
                </div>
            </Provider>
        );
    },
});

export default ProductCatalog;
