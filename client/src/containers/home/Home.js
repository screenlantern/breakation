import React, { Component } from 'react';
import Header from '../../components/header/Header';
import './Home.css';
import Login from '../auth/Login';

class Home extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="row">
      <section className="hero col">
        <div>
          <h1>Keep a Track with</h1>
          <h1>Breakation</h1>
        </div>
      </section>
      <section className="col">
        <div className="container">
        <Login />
        </div>
      </section>
      </div>
    );

  }
  
}

export default Home;
