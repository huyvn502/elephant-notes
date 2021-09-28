import { createStore, combineReducers } from "redux";

import { tagsReducer } from "../features/tags/tagsSlice";
import { notesReducer } from "../features/notes/notesSlice";
import { noteIsDisplayingReducer } from "../features/note-is-displaying/noteIsDisplayingSlice";
import { filterTagReducer } from "../features/tags/filterTagSlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";

export const store = createStore(combineReducers({
    tags: tagsReducer,
    notes: notesReducer,
    noteIsDisplaying: noteIsDisplayingReducer,
    filterTag: filterTagReducer,
    searchTerm: searchTermReducer
}));

