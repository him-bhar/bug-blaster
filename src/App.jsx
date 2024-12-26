import './App.css'
import './styles.css'
import TicketForm from "./components/TicketForm.jsx";
import ticketReducer from "./reducers/ticketReducer.jsx";
import {useReducer} from "react";

function App() {
    const initialState = {tickets: []} //Initial state of app there are no tickets

    const [state, dispatch] = useReducer(ticketReducer, initialState) //Reducer is now setup with our reducer function and the state it is hooked with i.e. list of tickets
    //dispatch is the actual function that is called, its the default function of the reducer

    return (
        <div className="App">
            <div className="container">
                <h1>Bug Blaster</h1>
                <TicketForm dispatch={dispatch} />
            </div>
        </div>
    )
}

export default App
