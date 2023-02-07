import styles from '/styles/Home.module.css'

export default function Tech4() {

    return (
        <>
            <div id={styles.tech} className={styles.landing} >
                <div className={styles.landingtext}>
                    <h3 id={styles.techtitle} className={styles.crew}><span>03</span>SPACE LAUNCH 101</h3>
                    <p  id={styles.sub} >THE TERMINOLOGY...</p>
                    <h1 id={styles.douglas} >SPACE CAPSULE</h1>
                    <p>Space capsule A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                </div>
                 <img className={styles.imgtech}
                        src="/technology/image-space-capsule-portrait.jpg"
                        alt="Picture of capsule"
                        />
                  <img className={styles.imgtech2}
                        src="/technology/image-space-capsule-landscape.jpg"
                        alt="Picture of capsule2"
                        />
            </div>      
        </>
    )
}
