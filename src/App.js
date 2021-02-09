import React from 'react';

/*
function Food(props){
    //console.log(props.fav);
    return <h1>I like {props.fav}</h1>
}*/

//ES6 사용시 {}안에 속성의 이름을 이용해 사용할수 있다.
function Food({fav}){

    return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!!</h1>
        <Food fav="kimchi"/>
        <Food fav="라면"/>
        <Food fav="삼겹살"/>
        <Food fav="쭈꾸미"/>

    </div>

  );
}

export default App;
