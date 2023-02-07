import styles from '/styles/Home.module.css'

export default function Landing3() {

    return (
        <>
            <div className={styles.landing} >
                <div className={styles.landingtext}>
                    <h3 className={styles.crew}><span>02</span>MEET YOUR CREW</h3>
                    <h3 id={styles.crewguy}>PILOT</h3>
                    <h1 id={styles.douglas} >VICTOR GLOVER</h1>
                    <p> Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
                </div>
                 <img className={styles.victor}
                        src="/crew/image-victor-glover.png"
                        alt="Picture of the victor"
                        />
            </div>      
        </>
    )
}