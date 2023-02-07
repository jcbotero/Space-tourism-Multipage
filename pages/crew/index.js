
import Bread1 from './bread'
import Landing1 from './principal'
import styles from '/styles/Home.module.css'
import Head from 'next/head'
import Landing2 from './mark';
import React from 'react';
import Landing3 from './victor';
import Landing4 from './anne';

export default class Home extends React.Component  {
  constructor(props) {
    super(props)
    this.state = { 
      component :  < Landing1  />,
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
      component :  < Landing1 />
   });
  }
   handleClick2() {
    this.setState({ 
      component :  < Landing2 />
   })
  }
   handleClick3() {
    this.setState({ 
      component :  < Landing3 />
   })}
   handleClick4() {
    this.setState({ 
      component :  < Landing4 />
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
          <div className={styles.maincrew}   >
            < Bread1 />
            {this.state.component}
          </div>
          <div className={styles.slider}> 
            <button className={styles.silderbutton} onClick={this.handleClick}></button>
            <button className={styles.silderbutton} onClick={this.handleClick2}></button>
            <button className={styles.silderbutton} onClick={this.handleClick3}></button>
            <button className={styles.silderbutton} onClick={this.handleClick4}></button>
          </div>
        </div>
        );
};}