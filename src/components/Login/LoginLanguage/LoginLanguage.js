import React from 'react'
import './LoginLanguage.scss'

const loginLanguage = props => {
  

    return <div className="LoginLanguage">
        <div className={props.active === 0 && "active"}>English (EN)</div>
        <div className={props.active === 1 && "active"}>Croatian (HR)</div>
        <div className={props.active === 2 && "active"}>German (DE)</div>
    </div>
}

export default loginLanguage