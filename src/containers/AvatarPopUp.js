import React from 'react'

class AvatarPopUp extends React.Component {

    handleClick = (id, e) => {
        if (e.target.classList.contains('avatar-chosen')) return
        // this.props.hidePop()
        this.props.popHandler()
        this.props.setAvatar(id)
        const avatarList = document.querySelectorAll('.avatar-image img')
        Array.from(avatarList).map(el => el.classList.remove('avatar-chosen'))
        avatarList[id].classList.add('avatar-chosen')

    }

    componentDidMount() {
        Array.from(document.querySelectorAll('.avatar-image img'))[0].classList.add('avatar-chosen')
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