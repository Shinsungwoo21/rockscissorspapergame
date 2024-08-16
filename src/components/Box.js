import React from 'react'
import '../App.css';

const Box = (props) => {
  let Result;
  
  if (props.title === "Computer" && props.result !== "tie" && props.result !== "") {
    Result = props.result === "win" ? "lose" : "win";
  } else {
    Result = props.result;
  }

  const boxColorChoice = () => {
    if (Result === "win") {
      return 'winbox'
    } else if (Result === "lose") {
        return 'losebox'
    } else {
        return 'box'
    }
  };


  return (
    <div className={boxColorChoice()}>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img} />
      <h2>{Result}</h2>
    </div>
  )
}

export default Box
