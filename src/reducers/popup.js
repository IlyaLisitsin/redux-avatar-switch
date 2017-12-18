const popup = (state = 0, action) => {
    switch(action.type) {
        case 'SHOW_POP':
            return true
        case 'HIDE_POP':
            return false
        default:
            return false
    }
}

export default popup;
