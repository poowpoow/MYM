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
          <heading className='block block-heading flex-column'>
  	       <h1>Gör en skillnad</h1>
           <p>The regret on our side is, they used to say years ago, we are reading about you in science class. Now they say, we are reading about you in history class.</p>
          </heading>

          <section className='block block__1 inner-space'>
            <p className='no-bottom-space'>ÄVEN SMÅ BIDRAG ÄR STORA</p>
            <h2>Hur kan du hjälpa?</h2>
            <div className='flex-rad flex-center'>
              <button className='btn btn--primary right-space'>Ge en gåva</button>
              <button className='btn btn--secondary'>Bli medlem</button>
            </div>
          </section>

          <section className='block block__2 inner-space'>
            <h2>MYM står för hopp om liv</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae augue non massa condimentum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse semper mi vel odio tristique, ut eleifend orci ultrices. Aliquam varius pellentesque ipsum sollicitudin hendrerit.</p>
            <button className='btn btn--primary'>Lär dig mer om MYM</button>
          </section>

          <section className='block block__3 inner-space'>
            <h2>Projekt: Ukerew</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae augue non massa condimentum ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse semper mi vel odio tristique, ut eleifend orci ultrices. Aliquam varius pellentesque ipsum sollicitudin hendrerit.</p>
            <button className='btn btn--primary'>Läs mer om projektet</button>
          </section>

          <section className='block block__4 inner-space'>
            <h2>MYM bilder</h2>
            <p>Instagram</p>
          </section>

          <footer className='footer inner-space'>
            <h2>Kontakta oss</h2>
            <p>KontaktInfo</p>
          </footer>
        </div>
    );
  }
}
