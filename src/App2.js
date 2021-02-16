import React from 'react';
//import PropTypes from "prop-types";

class App2 extends React.Component{

    constructor(props) {
        super(props);
        console.log("hello");
    }
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
    componentDidUpdate() {
        console.log("업데이트 이후 호출")
    }

    componentDidMount() {
        console.log("페이지 생성후 랜더이후 한번만 호출");
    }
    componentWillUnmount() {
        console.log("이건 페이지 즉 컴포넌트 떠날때 호출됨 ");
    }

    render(){

        console.log("render");
        return(
        <div>
            <h1>The number is {this.state.count}</h1>
            <button onClick={this.add}>add</button>
            <button onClick={this.minus}>Minus</button>
        </div>)
    }
}

export default App2;
