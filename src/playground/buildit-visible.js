class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            isShown: false
        };
        
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                isShown: !prevState.isShown
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{ this.state.isShown ? 'Hide Details' : 'Show Details' }</button>
                { this.state.isShown && <p>Here The Details Are:_________</p> }
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));



// let isShown = false;

// const onVisible = () => {
//     isShown = !isShown;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onVisible}>{isShown ? 'Hide Details' : 'Show Details'}</button>
//             { isShown && <p>Here The Details Are: _________</p>}
//         </div>
//     );

//     const appRoot = document.getElementById('app');
//     ReactDOM.render(template, appRoot);
// };

// render();