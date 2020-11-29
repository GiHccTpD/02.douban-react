import React, { Component } from 'react'
import bootcss from 'bootstrap/dist/css/bootstrap.css'

class BindEvent extends Component {
    constructor() {
        super()

        this.state = {
            msg: 'msg'
        }
    }
    render() {
        return (
            <div>
                BindEvent 组件
                <hr/>
                <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}  onClick={() => this.show('🚀')}>button</button>
                <div>{this.state.msg}</div>
                <input type="text" style= {{ with: '100%'}} value = {this.state.msg} onChange={(arg) => this.onchange(arg)}/>
            </div>
        );
    }

    show = (arg) => {
        // this.state.msg = 'rg' error
        this.setState({
            msg: arg
        })
    }

    onchange = (arg) => {
        // this.state.msg = 'rg' error
            console.log(arg.target.value)
            this.setState({
                msg: arg.target.value
            })
    }
}

export default BindEvent;