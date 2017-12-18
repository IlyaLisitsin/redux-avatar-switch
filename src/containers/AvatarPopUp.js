import React from 'react'

class AvatarPopUp extends React.Component {

    handleClick = (id) => {
        console.log('clicked', id)
        this.props.hidePop()
        this.props.setAvatar(id)
    }

    componentDidMount() {
        document.querySelector('body').addEventListener('click', (e) => {
            // e.stopPropagation()
            // this.props.hidePop()
        })
    }

    render() {

        const { picArr } = this.props
        console.log(11111111, this.props)


        return (
            <ul className={'avatar-popup'}>
                {
                    picArr.map((el, index) => {
                        return (
                            <li className={'avatar-image'}>
                                <img src={el} key={index} onClick={() => this.handleClick(index)}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default AvatarPopUp