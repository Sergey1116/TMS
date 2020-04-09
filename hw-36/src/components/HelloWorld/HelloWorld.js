import React from 'react'

import './HelloWorld.scss'
import logo from '../../assets/logo.svg'



export default function HelloWorld({ userName }) {
    return (
        <div className="hello-world">
            <img src={logo} alt="logo" width="100px" />
            <h1 className="hello-world__user-name">Hello, {userName}</h1>
            <h3>Hello again!</h3>
        </div>
    )
}
