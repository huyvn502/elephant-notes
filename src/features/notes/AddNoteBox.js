import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
import { addNote } from './notesSlice';

const AddNoteBox = (props) => {

    const closeAddNoteBox = () => {
        $("#title").val('');
        $("#detail").val('').hide();
        $("#add-note-box").hide();
        $("#add-note-box-container").css("display", "none");
    }

    const addNoteHandle = () => {
        let titleNote = document.getElementById("title").value;
        let detailNote = document.getElementById("detail").value;
        
        if (titleNote === '') {
            alert("Can't add new note with empty title");
            return;
        }

        const note = {
            id: Date.now().toString(),
            title: titleNote,
            detail: detailNote,
            tags: []
        }

        props.dispatch(addNote(note));
        closeAddNoteBox();
    }
    useEffect(() => {
        $("#detail").hide();
    }, []);

    const closeAddBoxEventHandle = (event) => {
        //Get position of Mouse and Add Note
        const positionXOfMouse = event.clientX, positionYOfMouse = event.clientY;
        const leftOfAddNoteBox = document.getElementById("add-note-box").offsetLeft;
        const topOfAddNoteBox =  document.getElementById("add-note-box").offsetTop;
        const widthOfAddNoteBox = document.getElementById("add-note-box").offsetWidth;
        const heightOfAddNoteBox = document.getElementById("add-note-box").offsetHeight;

        //When mouse is clicked inside add note box, dont't action is trigged
        if (positionXOfMouse > leftOfAddNoteBox && positionXOfMouse < leftOfAddNoteBox + widthOfAddNoteBox) {
            if (positionYOfMouse > topOfAddNoteBox && positionYOfMouse < topOfAddNoteBox + heightOfAddNoteBox) {
                return;
            }
        }
        //When mouse is clicked outside add note box, close add note box
        closeAddNoteBox();
    }

    const inputOnChangeHandle = (event) => {
        console.log(document.getElementById("title").value);
        if (event.target.value !== '') {
            $("#detail").slideDown();
        } else {
            $("#detail").val('').slideUp();
        };
    }

    return (
        <div id="add-note-box-container" onClick={closeAddBoxEventHandle}>
            <div id="add-note-box">
                <input type="text" id="title" name="title" placeholder="Enter Your Title" onChange={inputOnChangeHandle} />
                <textarea name="detail" id="detail" cols="30" rows="10" placeholder="Detail Note"></textarea>
                <button id="add-note-complete" onClick={addNoteHandle}><i class="fas fa-plus-circle"></i> Add</button>
            </div>
        </div>
    );
};

export default AddNoteBox;