import React from 'react';

import './my-label.css';

const MyLabel = ({id, value}) => {
    return (
        <label htmlFor={id}>{value}</label>
    );
};

export default MyLabel;