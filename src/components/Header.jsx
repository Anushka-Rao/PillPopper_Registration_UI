import React, { Component } from 'react'


export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-danger'>
                <div className="container">
                  <a className="navbar-brand">PillPopper</a>
                </div>
            </nav>
        </header>
      </div>
    )
  }
}