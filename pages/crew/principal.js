import styles from '/styles/Home.module.css'

export default function Landing1() {

    return (
        <>
            <div className={styles.landing} >
                <div className={styles.landingtext}>
                    <h3 className={styles.crew}><span>02</span>MEET YOUR CREW</h3>
                    <h3 id={styles.crewguy}>COMMANDER</h3>
                    <h1 id={styles.douglas} >DOUGLAS HURLEY</h1>
                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
                 <img className={styles.img}
                        src="/crew/image-douglas-hurley.png"
                        alt="Picture of the douglas"
                        />
            </div>      
        </>
    )
}


