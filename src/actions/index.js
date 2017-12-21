export const setAvatar = (id) => ({ type: 'SET_AVATAR', id })
export const selectAvatar = (id) => ({ type: 'SELECT_AVATAR', id })
export const pending = (isPending, id) => ({ type: 'PENDING', isPending, id })



export function mainAction(id) {

    return dispatch => {

        const p1 = new Promise(resolve => resolve(setTimeout(() => dispatch(setAvatar(id)), 2000)))
        // const p2 = new Promise(resolve => resolve())

        return Promise.all([p1]).then(() => dispatch(pending(true))).then(() => console.log('finished'))
    }
}

export const showPop = () => ({ type: 'SHOW_POP' })
export const hidePop = () => ({ type: 'HIDE_POP' })