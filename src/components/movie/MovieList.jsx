import React, { Component } from 'react'
import { Spin, Alert, Pagination } from 'antd';
// import fetchJSONP  from 'fetch-jsonp'
import MovieItem from './MovieItem' 

export default class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            nowPage: +props.match.params.page || 1,
            pageSize: 14,
            total: 0,
            isLoading: true,
            movieType: props.match.params.type

        }
    }

    // 组件接受新属性
    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoading: true,
            nowPage: +nextProps.match.params.page || 1,
            movieType: nextProps.match.params.type
        }, function () {
            this.loadMovieListByTypeAndPage()
        })
    }

    componentDidMount() {
        // const start = (this.state.nowPage - 1) * this.state.pageSize
        // const url = `https://api.douban.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}&apikey=0b2bdeda43b5688921839c8ecb20399b`
        // fetchJSONP(url)
        // .then(res => res.json())
        // .then(data => {
        //     // 豆瓣API不提供了 出此下策
        //     console.log(data)
        // })

        this.loadMovieListByTypeAndPage()
    }

    render() {
        return (<div>
            {this.renderList()}
        </div>)
    }

    loadMovieListByTypeAndPage = () => {
        const movies = require(`../mock/${this.state.movieType}.js`)
        setTimeout(() => {
            this.setState({
                isLoading: false,
                total: movies.total,
                movies: movies.subjects
            })
        }, 1000);
    }

    renderList = () => {
        if (this.state.isLoading) {
            return (<Spin tip="Loading...">
            <Alert
            message="正在请求"
            description="精彩内容,马上呈现"
            type="info"
            />
        </Spin>)
        } else {
            return (<div>
                <div style={{display:'flex', flexWrap:'wrap'}}>
                {this.state.movies.map(item => {
                    return <MovieItem key = {item.id} {...item}></MovieItem>
                })}
            </div>
            <div>
            <Pagination defaultCurrent={this.state.nowPage} total={this.state.total} pageSize={this.state.pageSize} 
            onChange={this.pageChanged}/>
            </div>
            </div>)
        }
    }

    pageChanged = (page) => {
        // // 使用BOM, 不是最佳方式
        // window.location.href = `/#/movie/${this.state.movieType}/${page}`

        // 编程式导航
        this.props.history.push(`/movie/${this.state.movieType}/${page}`)
    }
}