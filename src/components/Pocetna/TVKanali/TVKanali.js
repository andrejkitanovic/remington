import React from 'react'
import './TVKanali.scss'

import Kanal from '../../../assets/Delete/kanal.png'

const tvKanali = props => {
    const kanali = props.kanali.map((kanal,index) => <div className={"Kanal" + (props.position === index ? " active" : "")}><div style={{backgroundImage:`url(${Kanal})`}}/></div>)

    return <div className="TVKanaliPocetna" style={{transform:`translateX(${props.position * -194}px) translateY(${props.translate ? -250 : 0}px)`}} >
        {kanali}
    </div>
}

export default tvKanali