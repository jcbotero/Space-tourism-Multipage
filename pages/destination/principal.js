import styles from '/styles/Home.module.css'

export default function Des1() {

    return (
        <>
            <div className={styles.desti} >
                 <section>
                        <h3 id={styles.h3moon} className={styles.crew}><span>01</span>PICK YOUR DESTINATION</h3>
                         <img className={styles.img}
                        src="/destination/image-moon.png"
                        alt="Picture of moon"
                        />
                 </section>
                <section className={styles.destitext} >
                    <h1>MOON</h1>
                    <p className={styles.destip} >See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <div className={styles.desdata} >
                         <div>
                             <p>AVG. DISTANCE</p>
                             <h4>384,400 KM</h4>
                         </div>
                         <div>
                             <p>EST. TRAVEL TIME</p>
                             <h4>3 DAYS</h4>
                         </div>
                    </div>
                </section>
            </div>      
        </>
    )
}
