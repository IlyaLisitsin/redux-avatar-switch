import React, { Component } from 'react'
import cn from 'classnames'

class AvatarPopUp extends Component {

    handleClick = (index) => {
        const { disable, fetch } = this.props
        if (index === disable) return
        fetch(index)
    }

    render() {

        const { picArr, className, animate, disable } = this.props

        return (
            <ul className={className}>
                {
                    picArr.map((el, index) => {
                        let spinnerTrig = false
                        let disableTrig = false

                        if (index === animate) spinnerTrig = true
                        if (index === disable) disableTrig = true

                        return (
                            <li className={'avatar-image'}>
                               <div className={cn('list-item', {'disabled': disableTrig})}>
                                   <div className={cn('spinner', {'show': spinnerTrig})}/>
                                   <img src={el} key={index} onClick={() => this.handleClick(index)} />
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