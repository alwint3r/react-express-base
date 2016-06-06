import React from 'react'
import { connect } from 'react-redux'
import Action from '../actions/ProductAction'

const SearchForm = React.createClass({
    onSearch(event) {
        const { dispatch } = this.props;
        const { value } = event.target;

        if (!value) {
            return dispatch(Action.getProducts());
        }

        return dispatch(Action.searchProduct(value));
    },

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
                    onKeyUp={this.onSearch}
                    placeholder="Search Product"
                    style={inputStyle} />
            </form>
        );
    }
});

const mapper = (state, props) => {
    return { store: props.store };
};

const ConnectedSearchForm = connect(mapper)(SearchForm);

export default ConnectedSearchForm;
