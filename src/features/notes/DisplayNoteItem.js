import React from 'react';
import { removeNote } from './notesSlice';
import { changeNoteIsDisplaying } from '../note-is-displaying/noteIsDisplayingSlice';

const DisplayNoteItem = (props) => {
    const NoteIsClickHandle = () => {
        console.log(props.note.title + "is clicked");
        props.dispatch(changeNoteIsDisplaying(props.note));
    }
    const deleteNoteHandle = (event) => {
        event.stopPropagation(); //Prevent changeNoteIsDisplaying is trigged
        if (props.note.id === props.noteIsDisplaying.id) {
            const emptyNote = {
                id: '',
                title: '',
                detail: '',
                tags: []
            }
            props.dispatch(changeNoteIsDisplaying(emptyNote));
        }
        props.dispatch(removeNote(props.note));
        
    }
    return (
        <div className="note-item" onClick={NoteIsClickHandle}>
            <div className="heading-note-item">
                <div className="content-preview heading-text">
                    <h3 className="text-preview">{props.note.title}</h3>
                </div>
                <button title="Delete this note" onClick={deleteNoteHandle}><i class="far fa-trash-alt"></i></button>
            </div>
            <div className="content-preview">
                <p className="text-preview">{props.note.detail}</p>
            </div>
        </div>
    );
};

export default DisplayNoteItem;