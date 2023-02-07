import styles from '/styles/Home.module.css'

export default function Des4() {

    return (
        <>
            <div className={styles.desti} >
                 <section>
                        <h3 id={styles.h3moon} className={styles.crew}><span>01</span>PICK YOUR DESTINATION</h3>
                         <img className={styles.img}
                        src="/destination/image-titan.png"
                        alt="Picture of titan"
                        />
                 </section>
                <section className={styles.destitext} >
                    <h1>TITAN</h1>
                    <p className={styles.destip} >The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                    <div className={styles.desdata} >
                         <div>
                             <p>AVG. DISTANCE</p>
                             <h4>1.6 BIL. KM</h4>
                         </div>
                         <div>
                             <p>EST. TRAVEL TIME</p>
                             <h4>7 YEARS</h4>
                         </div>
                    </div>
                </section>
            </div>      
        </>
    )
}