import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from '../../css/movie_item.scss';
import { Rate } from 'antd';

class MovieItem extends Component {
  constructor(props) {
    super(props);
  }

  //   componentWillMount() {}

  //   componentDidMount() {}

  //   componentWillReceiveProps(nextProps) {
  //     this.setState({});
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {}

  //   componentWillUpdate(nextProps, nextState) {}

  //   componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.box}>
        <img src={this.props.images.small} alt="cover" className={styles.img}></img>
        <h4>电影名称: {this.props.title}</h4>
        <h4>上映年份: {this.props.year}年</h4>
        <h4>电影类型: {this.props.genres.join('/')}</h4>
        <Rate disabled defaultValue={this.props.rating.average / 2} />
      </div>
    );
  }
}

MovieItem.propTypes = {};

export default MovieItem;
