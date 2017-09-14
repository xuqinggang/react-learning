import React, { Component } from 'react';
import $ from 'jquery';
// import './style.scss';
export default class TestKey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [ 1, 2, 3 ],
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
        this.setState({
            arr: this.state.arr.concat(Math.floor(10*Math.random())).reverse(),
        });
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                asdf
                <button onClick={ this.addItem }>添加test</button>
                <ul>
                    {
                        this.state.arr.map((item, index) => {
                            return <li key={ index }>{ item } <input type="text"/></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
