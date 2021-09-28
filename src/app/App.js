import React from 'react';
import '../scss/app.scss';
import SideBar from '../components/SideBar';
import NoteList from '../components/NoteList';
import NoteContent from '../components/NoteContent';
import TagManagement from '../features/tags/TagManagement';
import AddNoteBox from '../features/notes/AddNoteBox';

const App = (props) => {
  const {state, dispatch} = props;
  return (
    <div id="app">
      <TagManagement tags={state.tags} dispatch={dispatch}/>
      <AddNoteBox notes={state.notes} dispatch={dispatch}/>
      <SideBar tags={state.tags} filterTag={state.filterTag} dispatch={dispatch}></SideBar>
      <NoteList notes={state.notes} tags={state.tags}
        noteIsDisplaying={state.noteIsDisplaying}
        filterTag={state.filterTag}
        searchTerm={state.searchTerm}
        dispatch={dispatch} ></NoteList>
      <NoteContent note={state.noteIsDisplaying} tags={state.tags} dispatch={dispatch}></NoteContent>
    </div>
  );
};

export default App;