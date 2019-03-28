import React, { Component } from 'react';
import styles from './_app.scss';
import { hot } from 'react-hot-loader/root';
import Router from 'router';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Helmet
          titleTemplate="%s - React Best Kit"
          defaultTitle="React Best Kit"
        >
          <meta name="description" content="A React application" />
        </Helmet>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/404">404</Link></li>
        </ul>
        <Router />
      </div>
    );
  }
}

export default hot(App);
