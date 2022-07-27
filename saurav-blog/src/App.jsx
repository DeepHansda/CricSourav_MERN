import "./App.css";
import Card from "./Components/Card/Card";
import Contact from "./Components/Contact/Contact";
import Table from "./Components/Table/Table";
import ContactBar from "./Components/ContactSidebar/ContactBar";
import Ads from "./Components/Ads/Ads";
import { useEffect } from "react";
import { useState } from "react";
import titleImg from "./Assets/WhatsApp Image 2022-07-16 at 9.18.15 AM.jpeg";
import Button from "./Components/Utils/Button";
import axios from 'axios'



export const client = axios.create({
  baseURL:'http://localhost:3400/api/',
  headers:{
   'content-Type': 'application/json'
  }
})

function App() {
  const [size, setSize] = useState(window.innerWidth);
  const [contents ,setContents] = useState([]);

  useEffect(() => {
    function handleSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  useEffect(()=>{
    client.get('/getAppDes').then(res =>{
      if(res){
        setContents(res.data.data)
      }
    }
      ).catch(err => console.log(err))
  },[])
  return (
    <div className="App">
      <div className="main-app-container">
        <div className="header-container">
          <header className="app-header">
            <div className="app-logo">
              <p>CricSourav</p>
            </div>
            <div className="header-contact-bar">
              <ContactBar />
            </div>
          </header>
        </div>

        <div className="title-box">
          <div className="title-img">
            <a href="https://t.me/cricsourav" target="_blank">
              <img src={titleImg} alt="title-img" />
            </a>
          </div>
          <div className="title-text">
            <div className="main-title">
              <h1>Top 15 Fantasy Apps To Earn Money Easily.</h1>
            </div>

            <div className="main-intro">
              <p>
                Hello Visitors MySelf Sourav , A Fantasy Cricket Analyst With
                More Than 3 Years Of Experience. More Than 50+ Mini Gl Winner
                Upto 1000 Members. Today I Am About To Tell You The Top Fantasy
                Apps In Fantasy Field...... All Applications Are Trusted And
                Personally I Have Verified All Of Them
              </p>
            </div>
          </div>
        </div>
        <div className="main-content">
          {size < 1000 && <Ads />}

          <div className="article article1">
            <div className="article-title">
              <h2>About Fantasy Cricket:</h2>
            </div>
            <div className="article-para">
              <p>
                Fantasy Cricket Apps: Fantasy cricket is a part of the Fantasy
                Sports genre. It is an online game where you create a virtual
                team of real cricket players and score points depending on how
                your chosen players perform in real-life matches. To win a
                tournament, you must work towards attaining the maximum points
                and the No. 1 rank on the leader-board. e.g. ICC IPL Fantasy
                league, IPL 2022 Fantasy league, etc…
                <br />
                <br />
                <br />
                A Fantasy Cricket Match is based on batting and bowling orders
                which are the most debated part of the cricketing strategy. A
                little change in order can change the course of the game. The
                concept involves selecting a team of 11 players from the pool of
                players who will play the match.
                <br />
                <br />
                <Button />
                <br />
                There are no budget caps and player selection is not limited to
                a particular number of batsmen, bowlers, and all-rounders. A
                fantasy team can have any type of player. The main aim of a
                Fantasy Cricket Match is to out-score the opposition by as big a
                margin as possible. Fantasy cricket matches can be played in all
                3 international forms: One Day International, Twenty20, and Test
                Cricket.
              </p>
            </div>
          </div>

          <div className="app-table-container">
            <Table contents={contents}/>
          </div>

          <div className="article article2">
            <div className="article-title">
              <h2>The legality of Fantasy Cricket in India:</h2>
            </div>
            <div className="article-para">
              <p>
                in india some of the words that are considered illegal in India
                by the general public but actually, there are many fantasy apps
                that are 100% legal and authentic to play.
                <br />
                <br />
                Fantasy Cricket is classified as a Game of Skill similar to
                other games like horse riding. Fantasy Cricket for Cash is at
                the hub of three dynamic industry spokes, namely, Internet, and
                Cricket.
              </p>
            </div>
          </div>

          <div className="article article3">
            <div className="article-title">
              <h2>Top {contents.length} Fantasy Cricket Apps List In India:</h2>
            </div>
            <div className="article-para">
              <p>
                Here We Will Discuss On Top Fantasy Cricket Apps In India In
                Brief, So You Can Pick Your Perfect Place To Show Your Cricket
                Skill And Earn Money From It. By This Post, Player can Select
                Trusted & And Genuine Fantasy Websites Those Paying Winning
                Money. I Already Played on These Fantasy Websites And Earned
                Lots Of Money, So Be Aware From Frauds & Scams…
              </p>
            </div>
          </div>
          <div className="app-cards-container">
            {
              contents.map((data, index) =>{
                return(
                  <Card data={data}/>
                )
              })
            }
          </div>
        </div>
        <div className="footer-container">
          <footer className="footer">
            <p>
              <small>
                &copy; Copyright {new Date().getFullYear()}, CricSourav
              </small>
            </p>
          </footer>
        </div>
      </div>
      <div className="app-ads-container">{size > 1000 && <Ads />}</div>
    </div>
  );
}

export default App;
