import React from 'react';
import Catalog from '../Catalog/Catalog';
import Queue from '../Queue/Queue';
import './Main.css';

function Main() {
  return (
      <>
        <header>
            <h1>Main Header</h1>
        </header>
        <section>
            <Catalog />
            <Queue />
        </section>
    </>
  );
}

export default Main;