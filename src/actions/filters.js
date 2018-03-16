export const sortByDefault = () => ({
    type: 'SORT_BY_DEFAULT'
})

export const sortByTextUp = () => ({
    type: 'SORT_BY_TEXT_UP'
})

export const sortByTextDown = () => ({
    type: 'SORT_BY_TEXT_DOWN'
})

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})