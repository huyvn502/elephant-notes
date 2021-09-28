import React from 'react';
import $, { event } from 'jquery';
import { useEffect } from 'react';

const DisplayTagsNote = (props) => {
    useEffect(() => {
        $("#full-tag-list").hide();

        $(document).ready(function() {
            $("#add-tag-btn").click(function() {
                $("#full-tag-list").fadeToggle();
            });
        });
    }, []);
    
    const isTagged = (tagName, taggedList) => {
        return taggedList.includes(tagName);
    }

    const deleteTagNoteHandle = (tagName) => {
        props.removeTag(tagName);
    }
    const addTagNoteHandle = (tagName) => {
        props.addTag(tagName);
        $("#full-tag-list").fadeToggle();
    }
    return (
        <div className="tagged-container">
            {props.tagged.map((tag) => {
                return (
                    <div className="tagged">
                        <span>{tag}</span><i class="fas fa-times" onClick={() => deleteTagNoteHandle(tag)}></i>
                    </div>
                )
            })}
            <div className="add-tag-container">
                <button id="add-tag-btn">Add Tags</button>
                <ul id="full-tag-list">
                    {props.tagged.length === props.fullTagList.length && <li>Can't add more Tag</li>}
                    {props.fullTagList.map((tag) => {
                        if (!isTagged(tag, props.tagged)) {
                            return (
                                <li onClick={() => addTagNoteHandle(tag)}>{tag}</li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DisplayTagsNote;