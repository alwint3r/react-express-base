import React from 'react';
import ReactDOM from 'react-dom';
import NameForm from './NameForm.jsx';
import DisplayText from './DisplayText.jsx';

const NameFormApp = React.createClass({
    getInitialState() {
        return { name: '' };
    },

    onNameChange(event) {
        this.setState({ name: event.target.value });
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

ReactDOM.render(<NameFormApp />, document.getElementById('app-container'));
