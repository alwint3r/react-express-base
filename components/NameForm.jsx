const NameForm = React.createClass({
    render() {
        return (
            <form action="javascript:void(0);">
                <input type="text"
                    name="name"
                    placeholder="Input your name"
                    value={this.props.name}
                    onChange={this.props.onNameChange} />
            </form>
        );
    },
});
