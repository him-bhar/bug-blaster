import React from "react";
import '../styles.css'

//Dispatch is needed to updated and delete a ticket, and
//ticket is needed for current reference of the ticket
const TicketItem = ({ticket, dispatch}) => {
    const {id, title, description, priority} = ticket;

    const priorityClass = {
        1: "priority-low",
        2: "priority-medium",
        3: "priority-high",
    }

    return (
        <div className="ticket-item">
            <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>

            <h3>{title}</h3>
            <p>{description}</p>

            <button className="button" onClick={() =>
                //deleting ticket by id here.
                dispatch({type: "DELETE_TICKET", payload: {id: id}})}>
                Delete
            </button>
            <button className="button" onClick={() => {
                /*Edit ticket*/
                dispatch({type: "SET_EDITING_TICKET", payload: ticket});
            }}>
                Edit
            </button>
        </div>
    )
}

export default TicketItem;