import React, {useEffect, useState} from "react";
import '../styles.css'

//Now there are 2 possibilities,
//1. A new ticket altogether
//2. Editing an existing ticket
//We need to update this form code, so it's flexible to handle both cases

const TicketForm = ({dispatch, editingTicket}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');

    useEffect(() => {
        if (editingTicket) {
            //updating state from existing ticket being edited.
            setTitle(editingTicket.title);
            setDescription(editingTicket.description);
            setPriority(editingTicket.priority);
        } else {
            clearForm();
        }

    }, [editingTicket]); //whenever there's an editing ticket load the ticket,
    // useEffect will do the job of loading the existing ticket, see 2nd arg has reference to editingTicket
    //so, this method will run each time editingTicket is executed.
    // otherwise this method will anyways run during initial load of the component

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
            //If editing existing ticket reuse the id, otherwise create a new one
            id: editingTicket ? editingTicket.id : new Date().toISOString(),
            title,
            description,
            priority
        };
        dispatch({
            //remember action object has 2 attribs, type and payload
            type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
            payload: ticket
        })
        clearForm(); //Form should reset after a submit
    }

    function cancelEdit(evt) {
        evt.preventDefault(); //blocks from reloading the form
        dispatch({
            //remember action object has 2 attribs, type and payload
            type: "CLEAR_EDITING_TICKET"
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
            {editingTicket && (
                <button className="button" type="button" onClick={cancelEdit}>Cancel Edit</button>
            )}

        </form>
    );
}

export default TicketForm;