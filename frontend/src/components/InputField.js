import React from 'react'
import PropTyles from 'prop-types';

// This component is used to take an input
// from other pages
const Field = ({ title }) => {
  const regFieldStyle = {
    margin: '20px 0'
  }
  return (
      <div style={regFieldStyle}>
          <span>{ title }</span>
          <input type="text" className="form-control" placeholder={ title }></input>
      </div>
  );
}

Field.propTypes = {
  title: PropTyles.string.isRequired,
};

export default Field;
