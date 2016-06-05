import React from 'react'

const ProductComponent = React.createClass({
    propTypes: {
        id: React.PropTypes.any.isRequred,
        title: React.PropTypes.string.isRequired,
        img: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
    },

    render() {
        const imgWrapperStyle = {
            float: 'left',
            position: 'relative',
            width: '100px',
        };

        const descWrapperStyle = {
            float: 'right',
            position: 'relative',
            width: '284px',
            padding: '8px',
        };

        const productWrapperStyle = {
            width: '400px',
            position: 'relative',
            float: 'left',
            display: 'block',
            marginRight: '10px',
            overflow: 'hidden',
        };

        return (
            <div className="product-tile" style={productWrapperStyle}>
                <div className="floaty-left" style={imgWrapperStyle}>
                    <img src={this.props.img} width="100" />
                </div>
                <div className="floaty-right" style={descWrapperStyle}>
                    <div style={{ marginTop: '-20px' }}>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    },
});

export default ProductComponent;
