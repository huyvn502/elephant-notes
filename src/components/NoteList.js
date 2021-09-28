import React from 'react';
import SearchTerm from '../features/searchTerm/SearchTerm';
import DisplayNoteItem from '../features/notes/DisplayNoteItem';
import { useEffect } from 'react';
import $ from 'jquery';
import { addNote } from '../features/notes/notesSlice';

const NoteList = (props) => {
    const initialNoteList = () => {
        for (let i = 0; i < 10; i++) {
            const note = {
                id: (Date.now() + i).toString(),
                title: `Title of Note ${i + 1}`,
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam cumque tempora, laudantium unde quis temporibus ex aliquid, quidem vitae sed deserunt a. Labore, fuga nemo veritatis sapiente earum vitae nihil?',
                tags: ['test tag']
            }
            if (i % 2 === 0) note.tags.push('work'); else note.tags.push('need completed');
            props.dispatch(addNote(note));
        }
    }
    useEffect(() => {
        initialNoteList();
        $(document).ready(function() {
            $("#add-note-box").hide();
            $("#add-new-notes").click(function() {
                $("#add-note-box-container").css("display", "flex");
                $("#add-note-box").fadeIn(700);
            });
            
        });
    }, []);

    const haveFilterTag = (tagList) => {
        if (props.filterTag === '') return true;
        return tagList.includes(props.filterTag);
    }
    const haveSearchTermSymbol = (note) => {
        if (props.searchTerm === '') return true;
        return (note.title.includes(props.searchTerm) || note.detail.includes(props.searchTerm));
    }
    const displayNoteList = () => {
        return props.notes.map((note) => {
            if (haveFilterTag(note.tags) && haveSearchTermSymbol(note)) {
                return <DisplayNoteItem note={note} dispatch={props.dispatch}  noteIsDisplaying={props.noteIsDisplaying}/>
            }
        })
    }

    return (
        <div id="note-list-management">
            <div className="note-list-heading">
                <h2>Notes</h2>
                <SearchTerm searchTerm={props.searchTerm} dispatch={props.dispatch}/>
            </div>
            
            <div className="note-list-container">
                {displayNoteList()}
            </div>
            <div id="add-new-notes-container">
                <button id="add-new-notes"><i class="fas fa-plus"></i> Add New Notes</button>
            </div>
        </div>
    );
};

export default NoteList;