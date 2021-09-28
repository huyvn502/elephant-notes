import React from 'react';
import '../scss/side-bar.scss';
import logo from '../img/white-elephant-logo.png';
import $ from 'jquery';
import { useEffect } from 'react';
import { addTag } from '../features/tags/tagsSlice';
import { updateFilter } from '../features/tags/filterTagSlice';
import { updateSearchTerm } from '../features/searchTerm/searchTermSlice';
import { store } from '../app/store';

const SideBar = (props) => {

    const initialTagList = () => {
        const initialTagsList = ['work', 'test tag', 'code', 'relax', 'learning', 'need completed'];
        initialTagsList.forEach(tag => {
            props.dispatch(addTag(tag));
        });
    }
    
    useEffect(() => {
        $(document).ready(function() {
            $("#tags-list").hide();

            $("#toggle-tag").click(function() {

                if ($(".fas").hasClass("is-slide-down")) {
                    $(".fas").removeClass("is-slide-down").addClass("is-slide-up");
                } else {
                    $(".fas").removeClass("is-slide-up").addClass("is-slide-down");
                }

                $("#tags-list").slideToggle();
            });

            $("#all-notes").click(function() {
                if ($(".fas").hasClass("is-slide-down")) $(".fas").removeClass("is-slide-down").addClass("is-slide-up");
                $("#tags-list").slideUp();
            });

            $("#tag-management-btn").click(function() {
                $("#tag-management-container").css("display", "flex");
            });

        });
        initialTagList();
    },[]);

    const styleHandleForTagIsClicked = () => {
        const tagListDisplay = document.getElementsByClassName('tag-item');
        for (let index = 0; index < tagListDisplay.length; index++) {
            if (tagListDisplay[index].innerHTML === props.filterTag) {
                tagListDisplay[index].style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            } else {
                tagListDisplay[index].style.background = 'none';
            }
        }
    }
    useEffect(styleHandleForTagIsClicked, [props.filterTag]);
    const selectFilterTag = (tag) => {
        props.dispatch(updateFilter(tag));
    }

    const displayAllNote = () => {
        props.dispatch(updateFilter(''));
        props.dispatch(updateSearchTerm(''));
    }

    return (
        <div id="side-bar">
            <div id="elephant-heading">
                <img src={logo} alt="Elephant Logo" />
                <h1>Elep</h1>
                <h1 className="yellow-color">hant</h1>
            </div>

            <div id="filter-tag">
                <button className="sidebar-btn" id="all-notes" onClick={displayAllNote}>All Notes</button>
                <div id="tags-list-container">
                    <button className="sidebar-btn" id="toggle-tag">Tags: <i class="fas fa-angle-down" id="angle"></i></button>
                    <ul id="tags-list">
                        {props.tags.map((tag) => {
                            return (
                                <li className="tag-item" onClick={() => selectFilterTag(tag)}>{tag}</li>
                            )
                        })}
                    </ul>
                </div>
                <button className="sidebar-btn" id="tag-management-btn">Tags Management</button>
            </div>
        </div>
    );
};

export default SideBar;