import React from 'react'
import arrow from '../assest/icon-arrow-down.svg'
import todo from '../assest/icon-todo.svg'
import calendar from '../assest/icon-calendar.svg'
import reminders from '../assest/icon-reminders.svg'
import planning from '../assest/icon-planning.svg'
const Header = () => {
  return (
    <header className='header'>
        <div className='container-title'>
          <h1 className='logo'>snap</h1>
          <nav className='nav'>
            <ul className='nav-menu'>
              <li className='dropdown'>
                <button className='button-menu'>Featuares <img src={arrow} className='arrow' /></button>

                <ul className='dropdown-menu'>
                  <li><img src={todo} />Todo list</li>
                  <li><img src={calendar} />Calendar</li>
                  <li><img src={reminders} />Reminders</li>
                  <li><img src={planning} />Planning</li>
                </ul>

              </li>
              <li className='dropdown'>
                <button className='button-menu'>Company <img src={arrow} className='arrow' /></button>
                <ul className='dropdown-menu1'>
                  <li>History</li>
                  <li>Our Team</li>
                  <li>Block</li>
                </ul>
              </li>
              <li>
                <button className='button-menu'>Careers</button>
              </li>
              <li>
                <button className='button-menu'>About</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className='container-button'>
          <button className='button-login'>Login</button>
          <button>Register</button>
        </div>
      </header>
  )
}

export default Header