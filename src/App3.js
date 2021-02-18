import React from 'react';
//import PropTypes from "prop-types";

class App3 extends React.Component{

    state = {
        isLoading : true
    };
    componentDidMount() {
        setTimeout(() =>{
            this.setState({isLoading : false});
        },3000)
    }

    render(){

        console.log("render");

        const { isLoading } = this.state;

        return(
        <div>
            {/*{this.state.isLoading ? "Loading" : "We are ready"}*/}
            {isLoading ? "Loading.." : "We are ready"}


        </div>);
    }
}

export default App3;
