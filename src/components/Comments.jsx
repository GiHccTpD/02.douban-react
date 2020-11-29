import React from 'react'
import cssObj from '@/CSS/CommentsList.scss'
import cssObjItem from '@/CSS/CommentsItem.scss'
import bootcss from 'bootstrap/dist/css/bootstrap.css'
console.log(cssObj)
console.log(cssObjItem)

const itemStyle = {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'}
export default class Comments extends React.Component {
    constructor() {
        super()

        this.state = {
            commentsList: [
                { id: 1, user: '张三', content: '哈哈哈哈,沙发1' },
                { id: 2, user: '李四', content: '哈哈哈哈,沙发2' },
                { id: 3, user: '王五', content: '哈哈哈哈,沙发3' },
                { id: 4, user: '赵六', content: '哈哈哈哈,沙发4' },
                { id: 5, user: '田七', content: '哈哈哈哈,沙发5' },
            ]
        }
    }

    // // 01
    // render (){
    //     return <div> 
    //         <h1>这是评论列表组件</h1>
    //         {this.state.commentsList.map(item => <div key = {item.id}>
    //             <h1>评论人:{item.user}</h1>
    //             <p>评论内容:{item.content}</p>
    //             </div>)}
    //     </div>
    // }


    // // 02
    // itemFunc(item) {
    //     return <div style={itemStyle}>
    //     <h1 style={{fontSize: '14px'}}>评论人:{item.user}</h1>
    //     <p style={{fontSize: '12px'}}>评论内容:{item.content}</p>
    //     </div>
    // }
    // render (){
    //     return <div> 
    //         <h1 style={{color: 'red', fontSize: '35px', zIndex: 2,fontWeight: 200, textAlign: 'center'}}>这是评论列表组件</h1>
    //         {this.state.commentsList.map(item => <this.itemFunc {...item} key={item.id}></this.itemFunc>)}
    //     </div>
    // }



    // 03
    itemFunc(item) {
        return <div className={cssObjItem.cmtBox}>
        <h1 className={cssObjItem.cmtTitle}>评论人:{item.user}</h1>
        <p className={cssObjItem.content}>评论内容:{item.content}</p>
        </div>
    }
    render (){
        return <div> 
            <h1 className={cssObj.title}>这是评论列表组件</h1>
            {/* <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}>按钮</button> */}

            <div className="panel panel-primary"></div>

            {this.state.commentsList.map(item => <this.itemFunc {...item} key={item.id}></this.itemFunc>)}
        </div>
    }
}