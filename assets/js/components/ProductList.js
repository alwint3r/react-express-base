import React from 'react';
import Product from './Product';

const ProductList = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
    },

    render() {
        const style = {
            marginTop: '30px',
            overflow: 'hidden',
            clear: 'both',
        };

        const products = this.props.data.products.map(prod => {
            return (<Product key={prod.id}
                title={prod.title}
                img={prod.img}
                description={prod.description} />)
        });

        return (<div className="product-list" style={style}>{products}</div>);
    }
});

export default ProductList;
