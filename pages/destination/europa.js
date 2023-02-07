import styles from '/styles/Home.module.css'

export default function Des3() {

    return (
        <>
            <div className={styles.desti} >
                 <section>
                        <h3 id={styles.h3moon} className={styles.crew}><span>01</span>PICK YOUR DESTINATION</h3>
                         <img className={styles.img}
                        src="/destination/image-europa.png"
                        alt="Picture of europa"
                        />
                 </section>
                <section className={styles.destitext} >
                    <h1>EUROPA</h1>
                    <p className={styles.destip} >The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                    <div className={styles.desdata} >
                         <div>
                             <p>AVG. DISTANCE</p>
                             <h4>628 MIL. KM</h4>
                         </div>
                         <div>
                             <p>EST. TRAVEL TIME</p>
                             <h4>3 YEARS</h4>
                         </div>
                    </div>
                </section>
            </div>      
        </>
    )
}