import React from "react";
import TicketItem from "./TicketItem.jsx";

//tickets and dispatch will come from App, so the list can and displayed and reducer can process actions
//dispatch is needed for
// 1. To pass it down to TicketItem
// 2. Ability to delete
function TicketList({tickets, dispatch}) {
    return (
        <div className="ticket-list">
            {
                tickets.map(ticket => (
                    <TicketItem
                        key={ticket.id}
                        ticket={ticket}
                        dispatch={dispatch} />
                ))
            }
        </div>
    )
}

export default TicketList;