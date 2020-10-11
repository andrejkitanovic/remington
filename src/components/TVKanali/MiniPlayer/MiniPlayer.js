import React from 'react'
import './MiniPlayer.scss'

const miniPlayer = props => {


    return <div className={"MiniPlayer" + (props.active ? " active" : "")}>
        <video autoPlay src="https://www.prva.rs/data/videos/2020/10/10/19/317097_vesti101018hprva_561_vesti.mp4"></video>
    </div>
}

export default miniPlayer