import React from 'react'
import './LoginForm.scss'

const loginForm = props => {

    return <div className="LoginForm">
        <input className={props.row === 0 && "active"} type="text" placeholder="Username"></input>
        <input className={props.row === 1 && "active"} type="password" placeholder="Password"></input>
        <div className="buttons">
            <div className={props.row === 2 && props.column === 0 && "active"} >Login</div>
            <div className={props.row === 2 && props.column === 1 && "active"} >Back</div>
        </div>
    </div>
}

export default loginForm