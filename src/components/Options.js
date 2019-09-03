import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
        <div className="widget-header">
          <h3 className="widget-header__title">You Options</h3>
          <button
            className="button button--link"
            onClick={props.handleDeleteOptions}
          >
          Remove All
          </button>
        </div>
        <div className="widget-body">
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>  }
        {
          props.options.map((opt, index) => (
            <Option
              handleDeleteOption={props.handleDeleteOption}
              key={opt}
              count={index + 1}
              optionText={opt}
            />
          ))
        }
        </div>
  </div>
);

export {Options as default};

