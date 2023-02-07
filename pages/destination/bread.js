
import React from 'react'
import styles from '/styles/Home.module.css'

export default function Bread() {

    
function menu() {
    document.getElementById("bread").style.display = "block"
    document.getElementById("close").style.display = "block"
}

function close() {
    document.getElementById("bread").style.display = "none"
    document.getElementById("close").style.display = "none"
    
}

    return (
        <>
         <div className={styles.bread}>
            <div>
                <img src="/shared/logo.svg" alt="Logo" ></img>
            </div>
            <div className={styles.line}></div>
            <div id='bread' className={styles.breadp}>
                <a href='/' ><span>00</span> HOME</a> 
                <a href='/destination' className={styles.home} ><span>01</span> DESTINATION</a> 
                <a href='/crew'><span>02</span> CREW</a> 
                <a href='/tech'><span>03</span> TECHNOLOGY</a> 
            </div> 
            <div className={styles.mobile}>
                <img className={styles.menu} onClick={menu} src="/shared/icon-hamburger.svg" alt="menu" ></img>
                <img id='close' onClick={close} className={styles.close} src="/shared/icon-close.svg" alt="close" ></img>
            </div> 
         </div>          
        </>
    )
}
