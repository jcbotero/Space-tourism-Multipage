
import styles from '/styles/Home.module.css'
import Head from 'next/head'
import React from 'react';
import Tech1 from './principal';
import Bread from './bread';
import Tech2 from './spaceport';
import Tech4 from './capsule';




export default class Home extends React.Component  {
  constructor(props) {
    super(props)
    this.state = { 
      component :  < Tech1  />,
      appStyle: {
        backgroundColor: "green",
      } 
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

  };
  handleClick() {
    this.setState({ 
      component :  < Tech1 />
   });
  }
   handleClick2() {
    this.setState({ 
      component :  < Tech2 />
   })
  }
   handleClick3() {
    this.setState({ 
      component :  < Tech4 />
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
          <div className={styles.maincrew} id={styles.tecc}   >
            < Bread />
            {this.state.component}
          </div>
          <div className={styles.techbtn}> 
            <button  onClick={this.handleClick}>1</button>
            <button  onClick={this.handleClick2}>2</button>
            <button  onClick={this.handleClick3}>3</button>
          </div>
        </div>
        );
};}