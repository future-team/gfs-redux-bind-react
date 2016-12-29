import React, {Component, PropTypes} from 'react';

export default class Like extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {likesCount : 0};
        this.onLike = this.onLike.bind(this);
    }
    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

    onLike () {
        let newLikesCount = this.state.likesCount + 1;
        this.setState({likesCount: newLikesCount});
    }
    render() {
        return (
            <div>
                Likes : <span>{this.state.likesCount}</span>
                <div><button onClick={this.onLike}>Like Me</button></div>
            </div>
        );
    }
}