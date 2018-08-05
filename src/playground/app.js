class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        let randonNum = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[randonNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Please Enter Valid Option To Get Results'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option Already Exists'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }

    render() {

        const title = 'Indecision';
        const subtitle = 'Put Your Life In The Hands of Computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick} 
                />
                <Options
                 options={this.state.options} 
                 handleDeleteOptions={this.handleDeleteOptions}
                 handleDeleteOption={this.handleDeleteOption}
                 />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p> 
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}>
            What Should I Do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            { props.options.length === 0 && <p>Please Add an item to get started.</p> }
            {
                props.options.map((option) => <Option key={option} option={option} handleDeleteOption={props.handleDeleteOption}/>)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={(e) => props.handleDeleteOption(props.option)}>Remove</button>
        </div>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => {
            return { error };
        });
        e.target.elements.option.value = '';
    }
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));