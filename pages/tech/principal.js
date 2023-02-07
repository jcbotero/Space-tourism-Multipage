import styles from '/styles/Home.module.css'

export default function Tech1() {

    return (
        <>
            <div id={styles.tech} className={styles.landing} >
                <div className={styles.landingtext}>
                    <h3 id={styles.techtitle} className={styles.crew}><span>03</span>SPACE LAUNCH 101</h3>
                    <p id={styles.sub} >THE TERMINOLOGY...</p>
                    <h1 id={styles.douglas} >LAUNCH VEHICLE</h1>
                    <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
                 <img className={styles.imgtech}
                        src="/technology/image-launch-vehicle-portrait.jpg"
                        alt="Picture of launch"
                        />
                  <img className={styles.imgtech2}
                        src="/technology/image-launch-vehicle-landscape.jpg"
                        alt="Picture of launch"
                        />
            </div>      
        </>
    )
}
