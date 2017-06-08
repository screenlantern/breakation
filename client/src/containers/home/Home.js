import React, { Component } from 'react';
import Header from '../../components/header/Header';

class Home extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <header />
      <section className="hero">
        <div className="container" >
          <h1>Welcome home</h1>
        </div>
      </section>
      </div>
    );

  }
  
}

export default Home;
