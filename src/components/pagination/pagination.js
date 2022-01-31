import React, {useState} from 'react';

import './pagination.css';

const Pagination = ({ticketsPerPage, totalTickets, paginate}) => {
    const [activeItem, setActiveItem] = useState(1);

    // номер активного элемента пагинации
    const setActiveNumber = (number) => {
        setActiveItem(number)
    }


    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage); i++) {
        pageNumbers.push(i)
    }

    const tickets = pageNumbers.map(number => (
        <li className="page-item" key={number}>
            {activeItem == number
                ?
                <a href="!#" className="page-link active" onClick={() => {
                    paginate(number);
                    setActiveNumber(number);
                }}>{number}
                </a>
                :
                <a href="!#" className="page-link" onClick={() => {
                    paginate(number);
                    setActiveNumber(number);
                }}>{number}</a>
            }
        </li>
    ))


    return (
        <div>
            <ul className="pagination">
                { tickets }
            </ul>
        </div>
    );
};

export default Pagination;