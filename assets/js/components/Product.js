import React from 'react'

const ProductComponent = React.createClass({
    render() {
        return (
            <div className="product-tile">
                <div className="floaty-left">
                    <img src={this.props.img} width="100" />
                </div>
                <div className="floaty-right">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    },
});

export default ProductComponent;
