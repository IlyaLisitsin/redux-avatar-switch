export const setAvatar = (id) => ({ type: 'SET_AVATAR', id })
export const selectAvatar = (id) => ({ type: 'SELECT_AVATAR', id })
export const pending = () => ({ type: 'PENDING' })


export function mainAction(id) {

    return dispatch => {
        const p1 = new Promise(resolve => resolve(
            setTimeout(dispatch(pending()), 3000)
        ))

        return Promise.all([p1]).then(dispatch(setAvatar(id))).then(() => console.log('finished'))
    }
}