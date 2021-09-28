const initialFilter = '';

export const filterTagReducer = (filterTag = initialFilter, action) => {
    switch(action.type) {
        case 'filterTag/updateFilter': 
            return action.payload;
        default: 
            return filterTag;
    }
}

export function updateFilter(filter) {
    return {
        type: 'filterTag/updateFilter',
        payload: filter
    }
}