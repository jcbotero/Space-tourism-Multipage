import styles from '/styles/Home.module.css'
import Head from 'next/head'
import React from 'react';
import Des1 from './principal';
import Bread from './bread';
import Des2 from './mars';
import Des3 from './europa';
import Des4 from './Ttitan';

export default class Home extends React.Component  {
  constructor(props) {
    super(props)
    this.state = { 
      component :  < Des1  />,
      appStyle: {
        backgroundColor: "green",
      } 
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  };
  handleClick() {
    this.setState({ 
      component :  < Des1 />
   });
  }
   handleClick2() {
    this.setState({ 
      component : < Des2 />
   })
  }
   handleClick3() {
    this.setState({ 
      component : < Des3 />
   })}
   handleClick4() {
    this.setState({ 
      component : < Des4 />
   })}
  
  render() {
    return (
       <div>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Bellefair&family=DM+Sans:wght@500&family=Inter:wght@200;600;700;900&family=League+Spartan:wght@900&display=swap" rel="stylesheet"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=DM+Sans:wght@500&family=Inter:wght@200;600;700;900&family=League+Spartan:wght@900&display=swap" rel="stylesheet" />
          </Head>
          <div className={styles.destination}   >
            < Bread />
            <div >
              <div className={styles.sliderdes}> 
                  <button onClick={this.handleClick}>MOON</button>
                  <button onClick={this.handleClick2}>MARS</button>
                  <button onClick={this.handleClick3}>EUROPA</button>
                  <button onClick={this.handleClick4}>TITAN</button>
              </div>
              <div>
                   {this.state.component}
              </div>
            </div>
          </div>
        </div>
        );
};}