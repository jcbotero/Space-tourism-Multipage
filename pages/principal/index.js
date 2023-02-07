
import styles from '/styles/Home.module.css'

export default function Landing() {

    return (
        <>
         <div className={styles.landing}  id={styles.main}  >
            <div className={styles.landingtext}>
                <h3>SO, YOU WANT TO TRAVEL TO</h3>
                <h1>SPACE</h1>
                <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <div className={styles.button}>
            <a href='/destination'><button>EXPLORE</button></a>
            </div> 
         </div>          
        </>
    )
}