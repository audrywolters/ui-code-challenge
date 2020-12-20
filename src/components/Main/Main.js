import React, {Component} from 'react';
import Catalog from '../Catalog/Catalog';
import Queue from '../Queue/Queue';
import './Main.css';

class Main extends Component {

  render() {
    return (
        <>
          <header>
              <h1>AudryFlix</h1>
          </header>
          <section>
              <Catalog />
              <Queue />
          </section>
      </>
    );
  }
}

export default Main;
