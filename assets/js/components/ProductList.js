import React from 'react';
import Product from './Product';

const ProductList = React.createClass({
    render() {
        const products = this.props.data.products.map(prod => {
            return (<Product key={prod.id}
                title={prod.title}
                img={prod.img}
                description={prod.description} />)
        });

        return (<div className="product-list">{products}</div>);
    }
});

export default ProductList;
