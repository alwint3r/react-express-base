const DisplayText = React.createClass({
    render() {
        return (
            <p> Hello, {this.props.text || '[Your Name Here]'}!</p>
        );
    },
});
