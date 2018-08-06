import React from 'react';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import AddOption from './AddOption';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick = () => {
        let randonNum = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[randonNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption = (option) => {
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}