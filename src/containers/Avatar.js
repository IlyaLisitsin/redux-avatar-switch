import { connect } from "react-redux";
import { showPop, hidePop, setAvatar } from "../actions/index";
import React from 'react'

import avatar1 from '../img/avatar1.png'
import avatar2 from '../img/avatar2.png'
import avatar3 from '../img/avatar3.png'
import avatar4 from '../img/avatar4.png'
import avatar5 from '../img/avatar5.png'
import avatar6 from '../img/avatar6.png'

const picArr = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]

class Avatar extends React.Component {

    // componentDidMount() {
    //     let a = document.querySelector('body')
    //     a.addEventListener('click', () => this.props.hidePop)
    // }

    render() {
        console.log(this.props)

        
        return (
            <div className={'avatar-container'}>
                <img className={'main-avatar'} src={picArr[this.props.activeAvatar]} onClick={this.props.shopPop}/>
                {this.props.popup && <AvatarPopUp hidePop={this.props.hidePop} setAvatar={this.props.setAvatar}/>}
            </div>
        )
    }
}

class AvatarPopUp extends React.Component {

    handleClick = (id) => {
        console.log('clicked', id)
        this.props.hidePop()
        this.props.setAvatar(id)
    }

    render() {

        console.log(11111111, this.props)


        return (
            <ul className={'avatar-popup'} >
                {
                    picArr.map((el, index) => {
                        return (
                            <li>
                                <img src={el} key={index} onClick={() => this.handleClick(index)}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}


export default connect(
    state => ({
        popup: state.popup,
        activeAvatar: state.activeAvatar
    }),
    {
        // changeAvatar: changeAvatar,
        shopPop: showPop,
        hidePop: hidePop,
        setAvatar: setAvatar
    }
)(Avatar)