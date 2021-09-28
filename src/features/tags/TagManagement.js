import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
import { addTag, removeTag } from './tagsSlice';

const TagManagement = (props) => {
    useEffect(() => {
        $(document).ready(function() {
            $("#complete-btn").click(function() {
                $("#new-tag-input").val('');
                $("#tag-management-container").css("display", "none");
            });
        });
    }, []);
    
    const isTagExisted = (tagName) => {
        return props.tags.includes(tagName);
    } 
    const addNewTag = () => {
        const newTagInput = document.getElementById("new-tag-input");
        if (newTagInput.value === '') {
            alert("Can't add empty tag");
            return;
        }
        if (isTagExisted(newTagInput.value)) {
            alert("Tag is Existed");
            return;
        }
        props.dispatch(addTag(newTagInput.value));
        newTagInput.value = '';
    }

    const deleteTag = (tagName) => {
        props.dispatch(removeTag(tagName));
    }

    return (
        <div id="tag-management-container">
            <div id="tag-management">
                <h2>Tag Management</h2>
                <div className="tag-input">
                    <i class="fas fa-plus"></i>
                    <input type="text" placeholder="Create New Tag" id="new-tag-input" />
                    <i class="fas fa-check is-button" onClick={addNewTag}></i>
                </div>
                <div id="tags-are-created">
                    {props.tags.map((tag) => {
                        return (
                            <div className="tag-input">
                                <i class="fas fa-tag"></i> 
                                <input type="text" value={tag}/> 
                                <i class="fas fa-trash-alt is-button" 
                                    title="Delete this tag"
                                    onClick={() => {deleteTag(tag)}}></i>
                            </div>
                        );
                    })}
                </div>
                <div id="complete-btn-container">
                    <hr />
                    <button id="complete-btn">Complete</button>
                </div>
            </div>
        </div>
    );
};

export default TagManagement;