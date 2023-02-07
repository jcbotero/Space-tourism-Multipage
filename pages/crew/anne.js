import styles from '/styles/Home.module.css'

export default function Landing4() {

    return (
        <>
            <div className={styles.landing} >
                <div className={styles.landingtext}>
                    <h3 className={styles.crew}><span>02</span>MEET YOUR CREW</h3>
                    <h3 id={styles.crewguy}>FLIGHT ENGINEER</h3>
                    <h1 id={styles.douglas} >ANSARI ANOUSHEH</h1>
                    <p>Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                </div>
                 <img  className={styles.ann}
                        src="/crew/image-anousheh-ansari.png"
                        alt="Picture of the ANOUS"
                        />
            </div>      
        </>
    )
}