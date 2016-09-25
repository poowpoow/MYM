import React, { Component } from 'react';
import {Router} from 'react-router';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

export default class MainMenu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        toggled: false
      }
      this.showMenu = this.showMenu.bind(this);

    }

    showMenu() {
      this.setState({
        toggled: !this.state.toggled
      });
    }

    render() {
      const menuToggleClass = this.state.toggled ? 'active' : '';
        return (
            <div className='main-menu__container'>
              <a onClick={(e) => {this.showMenu(e)}} className={menuToggleClass}>
                  <i className='material-icons main-menu__toggle-btn'>{this.state.toggled ? 'closed' : 'menu'}</i>
              </a>
              <nav className={menuToggleClass}>
                  <ul className='main-menu__list'>
                    <li className='main-menu__list-item'>
                      <a className='main-menu__link' href='/omoss'>Om oss</a>
                    </li>
                    <li className='main-menu__list-item'>
                      <a className='main-menu__link' href='/projekt'>Projekt</a>
                    </li>
                    <li className='main-menu__list-item'>
                      <a className='main-menu__link' href='/stodoss'>Stöd oss</a>
                    </li>
                    <li className='main-menu__list-item'>
                      <a className='main-menu__link' href='/kontakt'>Kontakt</a>
                    </li>
                    <li className='main-menu__list-item'>
                      <button className='btn btn--primary' href='/gedittstod'>Ge ditt stöd</button>
                    </li>
                  </ul>
                </nav>
            </div>
        );

    }
};
ReactDOM.render(<MainMenu/>, document.getElementById('main-menu'))
