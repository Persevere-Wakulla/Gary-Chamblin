import { useState, useEffect } from "react";

export default function Home() {
  let today = new Date();
  let hourNow = today.getHours();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // console.log(hourNow);
    const greet = () => {
      if (hourNow > 18) {
        setGreeting("Good Evening!");
      } else if (hourNow >= 12) {
        setGreeting("Good Afternoon!")
      } else if (hourNow > 0) {
        setGreeting("Good Morning!")
      } else {
        setGreeting("welcome!")
      }
    }
    greet()
  }, [])

  return (
    <>
 
      <div className="home container-fluid contentDiv">
        <div className="imgDiv mx-auto">
          {/* <img src="/assets/recipeImg/chef.jpg" className="img-fluid" alt="chef" /> */}
          <img src="/assets/recipeImg/pexels-andrea-piacquadio-3769999.jpg" className="img-fluid" alt="chef"/>
        </div>

        <div className="greetingDiv bg-gradient container-fluid text-center">
          <h1 className="greeting">{greeting}</h1>
          <h2 className="welcomeH2">Welcome to CHOWpe's Recipes</h2>
          <p className="homePara">Every recipe we present has been passed down for generations. We take pride in every recipe we provide and guarantee they will all be a favorite in your household also.</p>
          <p className="homePara">Thank you for visiting our page. We hope you enjoy all of our fine recipes and will share some of your own.</p>
        </div>


      </div>
    </>
  )
}