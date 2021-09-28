const initialState = [];

export const notesReducer = (notes = initialState, action) => {
    switch(action.type) {
        case 'notes/addNote':
            return [action.payload, ...notes];
        case 'notes/removeNote':
            return notes.filter((note) => note.id !== action.payload.id);
        case 'notes/updateNote': 
            return notes.map((note) => {
                if (note.id !== action.payload.id) return note;
                return action.payload;
            });
        default:
            return notes;
    }
}

export function addNote(note) {
    return {
        type: 'notes/addNote',
        payload: note
    }
}
export function removeNote(note) {
    return {
        type: 'notes/removeNote',
        payload: note
    }
}
export function updateNote(note) {
    return {
        type: 'notes/updateNote',
        payload: note
    }
}