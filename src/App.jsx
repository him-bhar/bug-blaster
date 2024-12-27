import './App.css'
import './styles.css'
import TicketForm from "./components/TicketForm.jsx";
import ticketReducer from "./reducers/ticketReducer.jsx";
import {useReducer} from "react";
import TicketList from "./components/TicketList.jsx";
import {sortTickets} from "./utilities/sortingUtilities.js";

function App() {
    const initialState = {tickets: [], editingTicket: null, sortPreference: 'High to Low' } //Initial state of app there are no tickets

    const [state, dispatch] = useReducer(ticketReducer, initialState) //Reducer is now setup with our reducer function and the state it is hooked with i.e. list of tickets
    //dispatch is the actual function that is called, its the default function of the reducer

    const sortedTickets = sortTickets(state.tickets, state.sortPreference);

    return (
        <div className="App">
            <div className="container">
                <h1>Bug Blaster</h1>
                <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />

                {state.tickets.length > 0 &&
                    (<div className="results">
                        <h2>All Tickets</h2>
                        <select value={state.sortPreference}
                                onChange={(evt) => dispatch({type: 'SET_SORTING', payload: evt.target.value})}>
                            <option>High to Low</option>
                            <option>Low to High</option>
                        </select>

                        <TicketList dispatch={dispatch} tickets={sortedTickets} />
                    </div>)
                }

            </div>
        </div>
    )
}

//{state.tickets.length > 0 && (<h2>All Tickets</h2>)}
//This style mean that if state.tickets.length > 0 that means if there are tickets, then only render the bit followed by &&
// Here && is not AND operator, rather its a then operator.

export default App
