import React from 'react'
import { connect } from 'react-redux'

import Product from './Product'
import Action from '../actions/ProductAction'

const ProductList = React.createClass({
    componentDidMount() {
        this.props.dispatch(Action.getProducts());
    },

    render() {
        const style = {
            marginTop: '30px',
            overflow: 'hidden',
            clear: 'both',
        };

        const products = this.props.products.map(prod => {
            return (<Product key={prod.id}
                title={prod.title}
                img={prod.img}
                description={prod.description} />)
        });

        return (<div className="product-list" style={style}>{products}</div>);
    }
});

const mapper = (state, props) => {
    return {
        products: state ? state.products : [],
    };
};

const ConnectedProductList = connect(mapper)(ProductList);

export default ConnectedProductList;
