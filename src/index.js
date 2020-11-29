import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '@/components/Hello'
import ClassHello from '@/components/ClassHello'
import Comments from '@/components/Comments'
import BindEvent from '@/components/BindEvent'

// 01
// const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a div' }, '这是一个H1')

// const mydiv = React.createElement('div', null, '这是一个div元素', myh1)

// ReactDOM.render(mydiv, document.getElementById('app'))


//02
// const mydiv = <div id="mydiv" title="div test">这是一个div
//     <h1>h1 h1 h1</h1>
// </div>

// ReactDOM.render(mydiv, document.getElementById('app'))



// 03
// const arr = [
//     <h2>h2</h2>,
//     <h3>h3</h3>,
// ]

// const arrStr = ['xxx', 'yyy', 'zzz']

// ReactDOM.render(<div>
//     {10000000}
//     <hr />
//     <p title={'title'}>这是一个p标签🏷</p>
//     <hr />
//     {arr}
//     <hr />
//     {arrStr.map(a => <div key={a}><h5>{a}</h5></div>)}
// </div>, document.getElementById('app'))



//04
// function Hello(props) {
//     console.log(props)
//     return <div>这是一个 hello 组件{props.name}</div>
// }

// const dog = {
//     name: '大黄',
//     sex: 'male',
//     age: 3
// }

// ReactDOM.render(<div>
//     123
//     <Hello {...dog} />
// </div>, document.getElementById('app'))


// // 05
// const dog = {
//     name: '大黄',
//     sex: 'male',
//     age: 3
// }
// ReactDOM.render(<div>
//     123
//     <ClassHello {...dog} />
// </div>, document.getElementById('app'))




// // 06
// ReactDOM.render(<div>
//     <Comments />
// </div>, document.getElementById('app'))


// 07
ReactDOM.render(<div>
    <BindEvent />
    {/* <Comments /> */}
</div>, document.getElementById('app'))
