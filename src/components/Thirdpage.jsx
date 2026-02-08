import React from 'react'
import Transparentbutton from "./Transparentbutton";

import './third.css'
const Thirdpage = () => {
    return (
        <div>
            <div className="third">
                <div className="third1 th">
                    <div className="serr">
                        <button>Services</button>
                    </div>
                    <p>Explore our full range of coaching, training, and tennis experiences. From first serve to match point - we've got the right program for you.</p>
                    <div className="exp">
                        <button>Explore More <i class="ri-arrow-right-up-long-line"></i></button>
                    </div>

                </div>
                <div className="third2 th">
                    <div className="third2_button">
                        <Transparentbutton name='Training Programs' />
                    </div>

                </div>
                <div className="third3 th">
                    <div className="up">
                        <div className="upbutton">
                            <Transparentbutton name='Court Access' />
                        </div>
                        <p>Hourly Court Rental</p>


                    </div>
                    <div className="down">

                        <p>Step into a space built for
                            players - to grow, compete,
                            and thrive.
                        </p>
                        <div className="arrowbuttom">
                            <div className="firstarrow arrow">
                                <i class="ri-arrow-left-long-line"></i>
                            </div>
                            <div className="secondarrow arrow">
                                <i class="ri-arrow-right-long-line"></i>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Thirdpage
