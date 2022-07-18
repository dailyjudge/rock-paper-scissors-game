import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "http://iwings.co.kr/web/product/big/202009/b4a485069b64e932431906d79b71cbf0.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://t1.daumcdn.net/cfile/tistory/2509BA3F57358C8D09",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);

    let randomItem = Math.floor(Math.random() * itemArray.length);

    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, com) => {
    if (user.name === com.name) {
      return "tie";
    } else if (user.name === "Rock")
      return com.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return com.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper") return com.name === "Rock" ? "win" : "lose";
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
