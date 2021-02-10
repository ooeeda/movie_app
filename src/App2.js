import React from 'react';
import PropTypes from "prop-types";

class App2 extends React.Component{

    state = {
        count : 0
    };

    add = () => {
        //this.setState({count:this.state.count + 1});
        //위에처럼 쓰지말란다
        this.setState(current => ({count : current.count+1}));

    };

    minus = () => {
        this.setState({count:this.state.count-1});

    };

/* 이건 오류가나네
    minus = function(){
        //this.setState({count:-1});
        this.setState({count:1});
    }*/

    render(){

        return(
        <div>
            <h1>The number is {this.state.count}</h1>
            <button onClick={this.add}>add</button>
            <button onClick={this.minus}>Minus</button>
        </div>)
    }
}

export default App2;
