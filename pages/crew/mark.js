import styles from '/styles/Home.module.css'

export default function Landing2() {

    return (
        <>
            <div className={styles.landing} >
                <div className={styles.landingtext}>
                    <h3 className={styles.crew}><span>02</span>MEET YOUR CREW</h3>
                    <h3 id={styles.crewguy}>MISSION SPECIALIST</h3>
                    <h1 id={styles.douglas} >MARK SHUTTLEWORTH</h1>
                    <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                </div>
                 <img  className={styles.mark}
                        src="/crew/image-mark-shuttleworth.png"
                        alt="Picture of the MARK"
                        />
            </div>      
        </>
    )
}