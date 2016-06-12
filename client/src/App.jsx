import React, { Component } from 'react';
import {Router} from 'react-router';
import io from 'socket.io-client';



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <nav>
            <a href="#">Öppna/Stäng meny</a>
            <ul>
              <li></li>
            </ul>
          </nav>
          <heading>
  	       <h1>Vi är en demokratisk, ...</h1>
          </heading>
          <section>
            <h2>Hur kan du hjälpa?</h2>
            <button>Ge en gåva</button>
            <button>Bli medlem</button>
          </section>
          <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae augue non massa condimentum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse semper mi vel odio tristique, ut eleifend orci ultrices. Aliquam varius pellentesque ipsum sollicitudin hendrerit.</p>
            <button>Lär dig mer om MYM</button>
          </section>
          <section>
            <h2>Projekt: Ukerew</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae augue non massa condimentum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse semper mi vel odio tristique, ut eleifend orci ultrices. Aliquam varius pellentesque ipsum sollicitudin hendrerit.</p>
            <button>Läs mer om projektet</button>
          </section>
          <section>
            <h2>MYM bilder</h2>
            <p>Instagram</p>
          </section>
          <footer>
            <h2>Kontakta oss</h2>
            <p>KontaktInfo</p>
          </footer>
        </div>
    );
  }
}
