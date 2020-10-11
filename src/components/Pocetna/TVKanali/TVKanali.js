import React from 'react'
import './TVKanali.scss'

import Kanal from '../../../assets/Delete/kanal.png'

const tvKanali = props => {
    const kanali = props.kanali.map((kanal,index) => <div className={"Kanal" + (props.position === index ? " active" : "")}><div style={{backgroundImage:`url(${Kanal})`}}/></div>)

    return <div className="TVKanaliPocetna" style={{right:props.position * 194 + "px"}}>
        {kanali}
    </div>
}

export default tvKanali