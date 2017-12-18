const timering = (state = 0, action) => {
    // console.log('timering', action.type)
    switch(action.type) {
        case 'START':
            return state + 1
        case 'CLEAR':
            return 0
        default:
            return state
    }
}

export default timering;
