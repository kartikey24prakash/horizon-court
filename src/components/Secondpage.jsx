import React from 'react'
import './second.css'
import LevelRow from "./Dots";

const Secondpage = () => {
  return (
    <div >
      <div className="second">
        <div className="secondtop">
          <div className="stleft">
            <button>About Horizon</button>
          </div>
          <div className="stright">
            <p>At Horizon, we don't just play tennis - we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.</p>
          </div>
        </div>
        <div className="secondmid">
          <div className="smleft sm">
            <p>Professional hard courts <span className='spangrey'> with tournament-grade lighting & climate control -play in </span> perfect conditions, in any season.</p>
            <div className="smlbutton">
              <div className="circle">
                <div className="cc"></div>
              </div>

            </div>
            <div className="smlbottomtext">Game Mood</div>

          </div>
          <div className="smmid sm">

          </div>
          <div className="smright sm">
            <h1>100+</h1>
            <h4>Pro Coaches</h4>
            <p>Certified professionals ready to boost your</p>
            <p>game from first serve to tournament level.</p>

            <div className='dot1'>
              <LevelRow label="Beginner" value={10} count={80} />
              <LevelRow label="Intermedi" value={8} count={40} />
              <LevelRow label="Advanced" value={7} count={35} />
            </div>
          </div>
        </div>
        <div className="secondbottom">

          
            <div className="num">
              <h1>12 000+</h1>
              <p>Hours of play annually</p>
            </div>
            <div className="num">
              <h1>89%</h1>
              <p>Player Retention Rate</p>

            </div>
            <div className="num">
              <h1>1,200+</h1>
              <p>Active Members</p>
            </div>
            <div className="num">
              <h1>125+</h1>
              <p>Annual tournament</p>
            </div>

            
         

        </div>
        <hr />

      </div>
    </div>
  )
}

export default Secondpage
