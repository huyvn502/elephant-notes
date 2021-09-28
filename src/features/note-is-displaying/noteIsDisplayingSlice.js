const initialNote = {
    id: '',
    title: '',
    detail: '',
    tags: []
};

export const noteIsDisplayingReducer = (note = initialNote, action) => {
    switch(action.type) {
        case 'noteIsDisplaying/changeNote': 
            return {
                ...note,
                id: action.payload.id,
                title: action.payload.title,
                detail: action.payload.detail,
                tags: action.payload.tags
            }
        case 'noteIsDisplaying/changeTitle': 
            return {
                ...note,
                title: action.payload
            };
        case 'noteIsDisplaying/changeDetail': 
            return {
                ...note,
                detail: action.payload
            }
        case 'noteIsDisplaying/changeTag': 
            return {
                ...note,
                tags: action.payload
            };
        default: 
            return note;
    } 
}

export function changeNoteIsDisplaying(note) {
    return {
        type: 'noteIsDisplaying/changeNote',
        payload: note
    }
}

export function changeTitleOfNoteIsDisplaying(title) {
    return {
        type: 'noteIsDisplaying/changeTitle',
        payload: title
    }
}

export function changeDetailOfNoteIsDisplaying(detail) {
    return {
        type: 'noteIsDisplaying/changeDetail',
        payload: detail
    }
}

export function changeTagOfNoteIsDisplaying(tag) {
    return {
        type: 'noteIsDisplaying/changeTag',
        payload: tag
    }
}
// export function addTagForNoteIsDisplaying(tag) {
//     return {
//         type: 'noteIsDisplaying/addTag',
//         payload: tag
//     }
// }

// export function removeTagForNoteIsDisplaying(tag) {
//     return {
//         type: 'noteIsDisplaying/removeTag',
//         payload: tag
//     }
// }
