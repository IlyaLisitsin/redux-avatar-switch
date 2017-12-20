import React from 'react'

class AvatarPopUp extends React.Component {

    handleClick = (id, e) => {
        this.props.fetch(id)
        console.log('pend', this.props.pend)

        // if (e.target.classList.contains('avatar-chosen')) return
        // const spinner = document.querySelectorAll('.spinner')
        // const curSpinner  = Array.from(spinner)[id]
        // curSpinner.classList.add('show')
        //
        // setTimeout(() => {
        //     this.props.popHandler()
        //     this.props.setAvatar(id)
        //     const avatarList = document.querySelectorAll('.avatar-image img')
        //     Array.from(avatarList).map(el => el.classList.remove('avatar-chosen'))
        //     avatarList[id].classList.add('avatar-chosen')
        //     curSpinner.classList.remove('show')
        // }, 2000)
    }

    componentDidMount() {
        Array.from(document.querySelectorAll('.avatar-image img'))[0].classList.add('avatar-chosen')
    }

    render() {

        const { picArr } = this.props

        return (
            <ul className={'avatar-popup'}>
                {
                    picArr.map((el, index) => {
                        return (
                            <li className={'avatar-image'}>
                               <div className={'list-item'}>
                                   <div className={'spinner'}/>
                                   <img src={el} key={index} onClick={(e) => this.handleClick(index, e)}/>
                               </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default AvatarPopUp