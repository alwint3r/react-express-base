import React from 'react';

const SearchForm = React.createClass({
    render() {
        const inputStyle = {
            margin: '20px 0px',
            height: '30px',
            padding: '3px 4px',
            width: '99%',
        };

        return (
            <form method="POST" action="javascript:void(0)">
                <input type="text"
                    name="product_search"
                    onKeyUp={this.props.onSearch}
                    placeholder="Search Product"
                    style={inputStyle} />
            </form>
        );
    }
});

export default SearchForm;
