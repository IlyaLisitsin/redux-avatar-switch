const setAvatar = (state = 0, action) => {
    switch(action.type) {
        case 'START':
            return false
        case 'STOP':
            return true
        default:
            return true
    }
}

export default setAvatar