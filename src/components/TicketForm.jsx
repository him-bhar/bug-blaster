import React, {useState} from "react";
import '../styles.css'

const TicketForm = ({dispatch}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    const priorityLabels = {
        1: 'Low',
        2: 'Medium',
        3: 'High'
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority('1');
    }

    function handleSubmit(evt) {
        evt.preventDefault(); //blocks from reloading the form
        const ticket = {
            id: new Date().toISOString(),
            title,
            description,
            priority
        };
        dispatch({
            //remember action object has 2 attribs, type and payload
            type: "ADD_TICKET",
            payload: ticket
        })
        clearForm(); //Form should reset after a submit
    }

    return (
        <form className="ticket-form" onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text"
                       value={title}
                       className="form-input"
                       onChange={evt => setTitle(evt.target.value)}></input>
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    className="form-input"
                    onChange={evt => setDescription(evt.target.value)}></textarea>
            </div>
            <fieldset className="priority-fieldset">
                <legend>Priority</legend>
                {
                    //This is a way to get entries from a map in JS object
                    Object.entries(priorityLabels).map(([value, label]) => (
                        <label key={value} className="priority-label">
                            <input type="radio"
                                   value={value}
                                   checked={priority === value}
                                   className="priority-input"
                                   onChange={evt => setPriority(evt.target.value)} />
                            {label}
                        </label>
                    ))
                }
            </fieldset>
            <button className="button" type="submit">Submit</button>
        </form>
    );
}

export default TicketForm;