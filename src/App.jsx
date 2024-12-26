import './App.css'
import './styles.css'
import TicketForm from "./components/TicketForm.jsx";

function App() {
    const initialState = {tickets: []} //Initial state of app there are no tickets

    return (
        <div className="App">
            <div className="container">
                <h1>Bug Blaster</h1>
                <TicketForm/>
            </div>
        </div>
    )
}

export default App
