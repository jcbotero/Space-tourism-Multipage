import styles from '/styles/Home.module.css'

export default function Tech2() {

    return (
        <>
            <div id={styles.tech} className={styles.landing} >
                <div className={styles.landingtext}>
                    <h3 id={styles.techtitle} className={styles.crew}><span>03</span>SPACE LAUNCH 101</h3>
                    <p  id={styles.sub} >THE TERMINOLOGY...</p>
                    <h1 id={styles.douglas} >SPACEPORT</h1>
                    <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.</p>
                </div>
                 <img className={styles.imgtech}
                        src="/technology/image-spaceport-portrait.jpg"
                        alt="Picture of spaceport"
                        />
                 <img className={styles.imgtech2}
                        src="/technology/image-spaceport-landscape.jpg"
                        alt="Picture of launch"
                        />
            </div>      
        </>
    )
}
