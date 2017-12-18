import React from 'react'

class AvatarPopUp extends React.Component {

    handleClick = (id, e) => {
        if (e.target.classList.contains('avatar-chosen')) return
        this.props.hidePop()
        this.props.popHandler()
        this.props.setAvatar(id)

        const avatarList = document.querySelectorAll('.avatar-image img')
        // console.log(avatarList)
        Array.from(avatarList).map(el => el.classList.remove('avatar-chosen'))
        // // console.log('clicked', id)
        // console.log(123123123131, avatarList[this.props.activeAvatar])
        avatarList[id].classList.add('avatar-chosen')

        // document.querySelector('.avatar-chosen').addEventListener('click', () => null)
    }

    render() {

        const { picArr, selectedAvatarId } = this.props

        return (
            <ul className={'avatar-popup'}>
                {
                    picArr.map((el, index) => {
                        return (
                            <li className={'avatar-image'}>
                                <img src={el} key={index} onClick={(e) => this.handleClick(index, e)}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default AvatarPopUp