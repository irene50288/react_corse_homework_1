import React from 'react';

const TextArea = ({name, value, onChange, label}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={onChange}/>
  </div>

)

export default TextArea;