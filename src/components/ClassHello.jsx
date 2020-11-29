import React from 'react'

export default class ClassHello extends React.Component {
    render (){
        console.log(this.props)
        return <div> 这是一个div</div>
    }
}