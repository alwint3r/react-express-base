'use strict';

import React from 'react';

const NameForm = React.createClass({
    render() {
        return (
            <form action="javascript:void(0);">
                <input type="text"
                    name="name"
                    placeholder="What's your name?"
                    value={this.props.name}
                    onChange={this.props.onNameChange} />
            </form>
        );
    },
});

export default NameForm;
