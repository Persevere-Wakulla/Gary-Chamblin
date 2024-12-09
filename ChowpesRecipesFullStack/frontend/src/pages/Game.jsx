import { useState, useEffect } from "react";
import Burrito from "/assets/recipeImg/burrito.jpg";
import Cherries from "/assets/recipeImg/cherries.jpg";
import Cutlet from "/assets/recipeImg/chicken-cutlets-featured.webp";
import Cutlet2 from "/assets/recipeImg/Chicken-cutlets-for-feature-1.jpg";
import Croissant from "/assets/recipeImg/croissant.jpg";
import Lambchop from "/assets/recipeImg/lambchop.jpg";
import FrenchToast from "/assets/recipeImg/FrenchToast.webp";
import Salmon from "/assets/recipeImg/salmon.jpg";
import Sandwich from "/assets/recipeImg/sandwich.jpg";
import Steak from "/assets/recipeImg/steak.jpg";
import SearedChop from "/assets/recipeImg/searedChop.jpg";
import HerbCrusted from "/assets/recipeImg/Herb-Crusted-Lamb-Chops-in-Butter-Sauce.jpg";

const pictures = [
  Burrito,
  Cherries,
  Cutlet,
  Cutlet2,
  Croissant,
  Lambchop,
  FrenchToast,
  Salmon,
  Sandwich,
  Steak,
  SearedChop,
  HerbCrusted,
];

export default function Game() {
  const [pics, setPics] = useState([...pictures]);
  const [clickPic, setClickPic] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setPics([...shuffleArray(pictures)]);
  }, [clickPic]);

  useEffect(() => {
    if (score > JSON.parse(localStorage.getItem("highScore"))) {
      setHighScore(score);
      localStorage.setItem("highScore", JSON.stringify(highScore));
    }
  }, [score]);

  function coupon() {
    if (score <= 4) {
      return "No coupon available";
    } else if (score >= 5) {
      return (
        <div>
          <p>$1 off any grocery item at any retailer</p>
          <br />
          <p>Use Code: REACT2024</p>
        </div>
      );
    } else if (score >= 12) {
      return (
        <div>
          <p>$1 off any grocery item at any retailer</p>
          <br />
          <p>Use Code: Java2024</p>
        </div>
      );
    }
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const clickHandler = (e) => {
    // console.log(e.target.src);
    if (!clickPic.includes(e.target.src)) {
      setClickPic([...clickPic, e.target.src]);
      setScore(score + 1);
    } else {
      // console.log('You lose')
      setClickPic([]);
      setGameOver(true);
    }
  };

  function restart() {
    setGameOver(false);
    setScore(0);
    setClickPic([]);
  }

  function clearBest() {
    localStorage.clear("highScore");
    setClickPic([]);
    setScore(0);
    setHighScore(0);
  }

  const display = pics.map((pic, index) => {
    return (
      <div key={index} className="picCard" onClick={clickHandler}>
        <img src={pic} className="gameImages" alt="pic" />
      </div>
    );
  });

  // console.log(display)
  return (
    <div className="gameMain container-fluid">
      <header>
        <div className="headerFlex">
          <div className="titleDiv">
            <h1 className="gameTitle text-center">Memory Game</h1>
          </div>
          <div className="scoreDiv d-flex justify-content-evenly mx-auto text-end w-75">
            <div>
              <h2 className="score">Score: {score} </h2>
            </div>
            <div className="highScore">
              <h2 className="high-score">High Score: {highScore}</h2>
              <button
                className="gameButton highScoreBtn btnStyle"
                onClick={clearBest}
              >
                Clear High Score
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="cardDisplay">
          {gameOver ? (
            <div className="gameOver text-center">
              <h1 className="text-center">Game Over</h1>
              <h3>Congratulations!</h3>
              <p>You just won a coupon for a discount off any grocery items.</p>
              <article className="coupon">
                <p>{coupon()}</p>
              </article>
            </div>
          ) : (
            display
          )}
        </div>
        <div className="text-center">
          <button className="gameButton btnStyle" onClick={restart}>
            Restart
          </button>
        </div>
      </main>
    </div>
  );
}
