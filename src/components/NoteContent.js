import React from 'react';
import DisplayTagsNote from '../features/tags/DisplayTagsNote';
import { updateNote } from '../features/notes/notesSlice';
import { changeTitleOfNoteIsDisplaying } from '../features/note-is-displaying/noteIsDisplayingSlice';
import { changeDetailOfNoteIsDisplaying } from '../features/note-is-displaying/noteIsDisplayingSlice';
import { changeTagOfNoteIsDisplaying } from '../features/note-is-displaying/noteIsDisplayingSlice';

const NoteContent = (props) => {
    const {note ,tags, dispatch} = props;
    let taggedOfNote = note.tags;

    const onChangeInputTitleHandle = (event) => {
        dispatch(changeTitleOfNoteIsDisplaying(event.target.value));
    }
    const onChangeInputDetailHandle = (event) => {
        dispatch(changeDetailOfNoteIsDisplaying(event.target.value));
    }
    const addTag = (tag) => {
        taggedOfNote.push(tag);
        dispatch(changeTagOfNoteIsDisplaying(taggedOfNote));
    }
    const removeTag = (tag) => {
        taggedOfNote = taggedOfNote.filter((element) => element !== tag);
        dispatch(changeTagOfNoteIsDisplaying(taggedOfNote));
    }
    const updateNoteHandle = () => {
        dispatch(updateNote(props.note));
    }
    return (
        <div id="note-content-container" onMouseLeave={updateNoteHandle}>
            <input type="text" name="title-note" id="title-note" 
                value={note.title} onChange={onChangeInputTitleHandle}/>
            {note.id !== '' && <DisplayTagsNote tagged={note.tags} fullTagList={tags}
                addTag={addTag} removeTag={removeTag}/>}

            <textarea type="text" name="detail-note" id="detail-note" 
                value={note.detail} onChange={onChangeInputDetailHandle}/>
        </div>
    );
};

export default NoteContent;