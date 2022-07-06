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
  const [userSelect, setUserSelect] = useState("");
  const [computerSelect, setComputerSelect] = useState("");
  const [result, setResult] = useState("");
  const [comResult, setComResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement_user(choice[userChoice], computerChoice));
    setComResult(judgement_com);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  };

  const judgement_user = (user, com) => {
    if (user.name === com.name) {
      return "Draw";
    } else if (user.name === "Rock")
      return com.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return com.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper") return com.name === "Rock" ? "Win" : "Lose";
  };

  const judgement_com = (resultOfUser) => {
    if (resultOfUser == "Draw") return "Draw";
    else if (resultOfUser == "Win") return "Lose";
    else return "Win";
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={comResult} />
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
