import React from 'react';

import './my-button.css'

const MyButton = ({page, className, click}) => {
    return (
        <button onClick={click} className={className}>{page}</button>
    );
};

export default MyButton;