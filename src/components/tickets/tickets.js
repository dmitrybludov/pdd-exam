import React from 'react';
import Card from "../card";


const Tickets = ({tickets}) => {
    return (
        <div>
            {
                tickets.map((ticket) => {
                    return (
                        <form>
                            <Card img={ticket.pic} correct={ticket.correct} question={ticket.question} answers={ticket.answers} />
                        </form>)
                })
            }
        </div>
    );
};

export default Tickets;