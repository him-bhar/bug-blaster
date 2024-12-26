//action has 2 attributes,
//1. type = tells what kind of action is this, string
//2. payload = what has happened, e.g. a new ticket object, in case of adding of ticket


function ticketReducer(state, action) {
    switch (action.type) {
        case "ADD_TICKET":
            //state is immutable, so any change in state means, recreate the state with the new value overriding the update,
            // we can use spread operation '...' to expand state object and then override the required value.
            return {...state, tickets: [...state.tickets, action.payload]};
        case "UPDATE_TICKET":
            // This syntax {...state, var_name: value}, mean state object is expanded and then var_name if present is overridden, if not present then added. And the curly braces wraps is up back again as an object
            return {
                ...state,
                tickets: state.tickets.map((ticket) => {
                    ticket.id === action.payload.id ? action.payload : ticket //Update when ticket id matches the one in action payload, rest all are copied as is.
                })
            };
        case "DELETE_TICKET":
            return {
                ...state,
                tickets: state.tickets.filter((ticket) => ticket.id !== action.payload.id)
                //Remove is basically ignore the ticket that has been removed rest all copied in the new state
            };

        default:
            return state; //No known action, so return state unchanged
    }
}

export default ticketReducer;