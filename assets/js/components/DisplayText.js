'use strict';

import React from 'react';

const DisplayText = React.createClass({
    render() {
        return (
            <p> Hello, {this.props.text || '[Your Name Here]'}!</p>
        );
    },
});

export default DisplayText;
