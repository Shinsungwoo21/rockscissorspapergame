import './App.css';
import Box from './components/Box';
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://thumbnail.10x10.co.kr/webimage/image/mask/165/B001659858.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false"
  },
  scissors: {
    name: "Scissors",
    img: "https://artfeel.co.kr/web/product/big/202007/7caa3802b8bcb075532849f65be4522a.jpg"
  },
  paper: {
    name: "Paper",
    img: "https://image.utoimage.com/preview/cp867847/2017/06/201706006345_500.jpg"
  },
};


function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")



  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice))
  };

  const judgement = (user, computer) => {
    if ((user.name) === computer.name) {
      return "tie";
    } else if (user.name === "Rock") 
        return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper") 
      return computer.name === "Rock" ? "win" : "lose";
  };
  


  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>  
      <div className='main'>  
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
    
  );
}

export default App;
