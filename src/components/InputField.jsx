import React from 'react';

const InputField = ({handleSelectChange,value,title,name}) => {
    return (
        <label className='sidebar-label-container' >
        <input type="radio" name={name}  value={value} onChange={handleSelectChange}/>
        <span className='checkmark'></span>{title}
    </label>
    );
};

export default InputField;