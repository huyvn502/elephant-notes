import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
import { updateSearchTerm } from './searchTermSlice';

const SearchTerm = (props) => {

    useEffect(() => {
        $(document).ready(function() {
            $("#search-term-input").focus(function() {
                $("#searchTerm").addClass("is-focused");
            });
            $("#search-term-input").blur(function() {
                $("#searchTerm").removeClass("is-focused");
            });

            $("#searchTerm-btn").click(function() {
                $("#searchTerm").toggleClass("is-active");
                $("#search-term-input").toggleClass("is-active");
            });
        });
    }, []);

    const onChangeSearchTermHandle = (event) => {
        props.dispatch(updateSearchTerm(event.target.value));
    }
    
    return (
        <div id="searchTerm">
            <input id="search-term-input" type="text" value={props.searchTerm} onChange={onChangeSearchTermHandle} />
            <button id="searchTerm-btn">
                <div id="search-shape"></div>
            </button>
        </div>
    );
};

export default SearchTerm;