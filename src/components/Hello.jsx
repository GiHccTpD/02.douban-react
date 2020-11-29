import React from 'react'

export default function Hello(props) {
    console.log(props)
    return <div>这是一个 hello 组件{props.name}</div>
}
