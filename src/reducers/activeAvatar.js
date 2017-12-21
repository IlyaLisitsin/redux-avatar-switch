export const activeAvatar = (state = {
    isPending: null,
    id: 0,
}, action) => {
    switch(action.type) {

        case 'SELECT_AVATAR' :
            console.log('action SEKECT')
            return Object.assign({}, state, {
                isPending: false,
                id: action.id,
            })
        case 'PENDING' :
            console.log('action PENDING')
            return Object.assign({}, state, {
                isPending: action.isPending,
                id: action.id,
            })
        case 'SET_AVATAR' :
            console.log('action SET_AVATAR')
            return Object.assign({}, state, {
                isPending: false,
                id: action.id,
            })

        default:
            return state
    }
}

export const togglePop = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_POP':
            return true
        case 'HIDE_POP':
            return false
        default:
            return state;
    }
}

