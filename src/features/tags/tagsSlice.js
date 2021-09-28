const initialState = [];

export const tagsReducer = (tags = initialState, action) => {
    switch (action.type) {
        case 'tags/addTag':
            return [...tags, action.payload];
        case 'tags/removeTag': 
            return tags.filter((tag) => tag !== action.payload);
        default: 
            return tags;
    }
}

export function addTag(tag) {
    return {
        type: 'tags/addTag',
        payload: tag
    };
}

export function removeTag(tag) {
    return {
        type: 'tags/removeTag',
        payload: tag
    }
}

