import React from 'react';
import Location from './Location';

const Sidebar = ({handleSelectChange,handleButtonFilter}) => {
    return (
        <div className='space-y-5'>
            <h3 className=''>Filters </h3>
            <Location handleSelectChange={handleSelectChange}/>
            
        </div>
    );
};

export default Sidebar;