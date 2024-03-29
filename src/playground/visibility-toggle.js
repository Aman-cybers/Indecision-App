class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }
    toggleVisibility() {
        this.setState((prevState)=> {
            return {
                visibility : !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <h2>Hey!, these are the details</h2>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'))