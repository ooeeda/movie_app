import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
        {
            id : 1,
            name : "볶음밥",
            image : "https://t1.daumcdn.net/cfile/tistory/23544B3E51C4081608",
            rating : 5


        },
        {
            id : 2,
            name : "라면",
            image : "https://i.ytimg.com/vi/e1ADIzNXK9g/maxresdefault.jpg",
            rating : 4.3

        },
        {
            id : 3,
            name : "햄버거",
            image : "https://img.insight.co.kr/static/2018/07/05/700/bs8obfmy6x14j1301vo3.jpg",
            rating : 4.8

        },
        {
            id : 4,
            name : "피자",
            image : "http://cfile23.uf.tistory.com/image/222E3D4F530DEC511A93FD",
            rating : 4.7

        }
    ];
/*
function Food(props){
    //console.log(props.fav);
    return <h1>I like {props.fav}</h1>
}*/

//ES6 사용시 {}안에 속성의 이름을 이용해 사용할수 있다.
function Food({name, picture, rating}){

    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/ 5.0</h4>
            <img src={picture} alt={name}/>
        </div>
    );
}

Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number
};

function renderFood(dish){

    //console.log(dish);

    return (
        <Food key={dish.name} name={dish.name} picture={dish.image} rating={dish.rating}/>
    );

}

function App() {
  return (
    <div className="App">

  {/*      {foodILike.map(dish => (
            <Food name={dish.name} picture={dish.image} />
            ))}*/}

        {foodILike.map(renderFood)}



    </div>

  );
}

export default App;
