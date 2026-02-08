import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left"><h3>Horizon Courts</h3></div>
      <div className="centerbar">
        <div className="about"><button>About us</button></div>
        <div className="service">Service</div>
        <div className="coach">Coaches</div>
        <div className="events">Events</div>
        <div className="contact">Contacts</div>
      </div>
      <div className="right">
        <div className="book"><button>Book Now <i class="ri-arrow-right-up-long-line"></i></button></div>
      </div>
    </div>
  )
}

export default Navbar
