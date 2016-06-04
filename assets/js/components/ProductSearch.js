import React from 'react';

const SearchForm = React.createClass({
    render() {
        return (
            <form method="POST" action="javascript:void(0)">
                <input type="text"
                    name="product_search"
                    onKeyUp={this.props.onSearch}
                    placeholder="Search Product" />
            </form>
        );
    }
});

export default SearchForm;
