const activeAvatar = (state = 0, action) => {
    // console.log('tick', state)
    switch(action.type) {
        case 1 :
            return 1
        case 2:
            return 2
        case 3:
            return 3
        case 4:
            return 4
        case 5:
            return 5
        case 6:
            return 6
        default:
            return 0
    }
}

export default activeAvatar