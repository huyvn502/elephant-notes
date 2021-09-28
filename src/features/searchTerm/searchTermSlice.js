const initialSearchTerm = '';

export const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
    switch(action.type) {
        case 'searchTerm/updateSearchTerm': 
            return action.payload;
        default: 
            return searchTerm;
    }
}

export function updateSearchTerm(value) {
    return {
        type: 'searchTerm/updateSearchTerm',
        payload: value
    }
}