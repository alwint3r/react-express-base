'use strict';

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
