import React, {useEffect, useState} from 'react';

import './app.css';

import data from '../../data.json';
import Tickets from "../tickets/tickets";
import Pagination from "../pagination/pagination";

const App = () => {
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ticketsPerPage, setTicketsPerPage] = useState(1);

    useEffect(() => {
        const getTickets = () => {
            setTickets(data);
        }
        getTickets()
    }, [])

    const lastTicketIndex = currentPage * ticketsPerPage;
    const firstTicketIndex = lastTicketIndex - ticketsPerPage;
    const currentTicket = tickets.slice(firstTicketIndex, lastTicketIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)

    return(
        <div id="wrapper">
            <div className="container">
                <Pagination paginate={paginate} ticketsPerPage={ticketsPerPage} totalTickets={tickets.length} />
                <div id="questions">
                    <Tickets tickets={currentTicket}/>
                    {/*<button onClick={prevPage}>Prev Page</button>*/}
                    {/*<button onClick={nextPage}>Next Page</button>*/}
                </div>
            </div>
        </div>
    )
}

export default App;