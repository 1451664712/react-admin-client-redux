import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    // state = {
    //     count: 0
    // }
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props)
        this.numberRef = React.createRef()
    }
    increment = () => {
        const number = this.numberRef.current.value * 1
        this.props.increment(number)
    }
    decrement = () => {
        const number = this.numberRef.current.value * 1
        this.props.decrement(number)

    }
    incrementIfOdd = () => {
        const number = this.numberRef.current.value * 1
        if (this.props.count % 2 ===1 ) {
            this.props.increment(number)
        }
    }
    // incrementAsync = () => {
    //     const number = this.numberRef.current.value * 1
    //     setTimeout(() => {
    //         this.props.increment(number)
    //     }, 1000)
    // }
    incrementAsync = () => {
        const number = this.numberRef.current.value * 1
        this.props.incrementAsync(number)
    }
    render() {
        const count = this.props.count
        console.log(this.props)
        return (
            <div>
                <span>click {count} times</span>
                <div>
                    <select ref={this.numberRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>decrement async</button>
                </div>
            </div>
        );
    }
}

