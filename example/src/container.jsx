import React from 'react'
import { connect } from 'react-redux'
import * as Action from './action'
import bindingMixin from './bindingMixin'

@connect(state => ({
    like: state.like
}),  {...Action})
@bindingMixin
export default class App extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.setBinding('like')
        this.state = {
            likesCount : 0
        }
        this.onLike = this.onLike.bind(this)
        this.unLike = this.unLike.bind(this)
    }
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps() {}
    onLike () {
        this.num = this.props.like.get('num')
        let likes = this.num + 1
        this.props.addLike(likes)
    }
    unLike () {
        this.num = this.props.like.get('num')
        let likes = this.num - 1
        this.props.reduceLike(likes<0 ? 0 : likes)
    }
    render () {
        const {like} = this.props
        const num = like.get('num')
        const liker = like.get('liker').toJS()
        console.log('fetching', this.state.fetching)
        return (
            <div>
                <p>Hello React!</p>
                <div>
                    Likes : <span>{num}
                    {
                        liker.map((item, index)=>{
                            return <i key={index}>{item.name}&nbsp;</i>
                        })
                    }
                    &nbsp;&nbsp;</span>
                    <div><button onClick={this.onLike}>Like Me ):</button><button onClick={this.unLike}>UnLike Me (:</button></div>
                </div>
            </div>
        )
    }
}
