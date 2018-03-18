const defaultState = {
    sortBy: 'default',
    text: ''
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'SORT_BY_DEFAULT' :
            return {
                ...state,
                sortBy: 'default'
            }
        case 'SORT_BY_TEXT_UP' :
            return {
                ...state,
                sortBy: 'textup'
            } 
        case 'SORT_BY_TEXT_DOWN' :
            return {
                ...state,
                sortBy: 'textdown'
            }
        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                sortBy: 'text',
                text: action.text
            } 
        default: 
            return state;
    }
}