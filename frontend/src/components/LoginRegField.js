import React from 'react';
import PropTypes from 'prop-types';

const LoginFieldStyle = {
  margin: '0px 0 30px 0',
}

const LoginFieldStyleBottom = {
  margin: '0px 0 15px 0',
}

// This component is an input field for the login/register pages
export const LRField = ({ id, text, type, onChange, aria }) => {
  return (
    <div style={LoginFieldStyle}>
      <p>{text}:</p>
      <input id={id} type={type} className="form-control" placeholder={text} onChange={onChange} aria-label={aria}></input>
    </div>
  )
}

// This component is an input field for the login/register pages
export const LRFieldBottom = ({ id, text, type, onChange, aria }) => {
  return (
    <div style={LoginFieldStyleBottom}>
      <p>{text}:</p>
      <input id={id} type={type} className="form-control" placeholder={text} onChange={onChange} aria-label={aria}></input>
    </div>
  )
}

LRField.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  aria: PropTypes.string,
}

LRFieldBottom.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  aria: PropTypes.string,
}
