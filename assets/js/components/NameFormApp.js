'use strict';

import React from 'react';
import { createStore } from 'redux';
import NameForm from './NameForm';
import DisplayText from './DisplayText';
import ChangeTextAction from '../actions/ChangeTextAction';
import store from '../stores/TextStore';

const NameFormApp = React.createClass({
    getInitialState() {
        return { name: '' };
    },

    onNameChange(event) {
        store.dispatch(ChangeTextAction.changeText(event.target.value));
    },

    componentWillMount() {
        store.subscribe(() => {
            this.setState(store.getState());
        });
    },

    render() {
        return (
            <div>
                <NameForm value={this.state.name} onNameChange={this.onNameChange} />
                <DisplayText text={this.state.name} />
            </div>
        );
    },
});

export default NameFormApp;
