console.log('inserted app.js')

const app = {
    'title': 'Indecision App',
    'subtitle': 'Leave Your Life In The Hands of Computer',
    'options': []
}


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderTemplate();
};

const removeAll = () => {
    app.options.splice(0, app.options.length);
    renderTemplate();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
};




const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>Leave Your Life In The Hands of Computer</p>}
            <p>{app.options.length > 0 ? 'Here Are Your Options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Item</button>
            </form>
        </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

renderTemplate();