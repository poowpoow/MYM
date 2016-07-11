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
          <heading className='block block--heading'>
           <img className='block__image' src='src/images/CIMG1464.png' />
  	       <h1>Vi är en demokratisk, ...</h1>
          </heading>
          <section>
            <h2>Även små bidrag är stora. Hur kan du hjälpa?</h2>
            <a className='btn btn--primary bottom-space'>Swisha en gåva</a>
            <a className='btn btn--secondary'>Bli månadsgivare</a>
          </section>
          <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae augue non massa condimentum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse semper mi vel odio tristique, ut eleifend orci ultrices. Aliquam varius pellentesque ipsum sollicitudin hendrerit.</p>
            <a className='btn btn--primary'>Lär dig mer om MYM</a>
          </section>
          <section>
            <h2>Projekt: Ukerew</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae augue non massa condimentum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse semper mi vel odio tristique, ut eleifend orci ultrices. Aliquam varius pellentesque ipsum sollicitudin hendrerit.</p>
            <a className='btn btn--primary'>Läs mer om projektet</a>
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
