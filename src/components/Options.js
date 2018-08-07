import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                className="button--link"
                onClick={props.handleDeleteOptions}
                >Remove All
                </button>            
            </div>
            { props.options.length === 0 && <p className="widget__message">Please Add an item to get started.</p> }
            {
                props.options.map((option, index) => <Option 
                key={option} 
                option={option} 
                handleDeleteOption={props.handleDeleteOption}
                count={index + 1}
                />)
            }
        </div>
    );
};

export default Options;