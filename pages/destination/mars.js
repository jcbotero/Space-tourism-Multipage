import styles from '/styles/Home.module.css'

export default function Des2() {

    return (
        <>
            <div className={styles.desti} >
                 <section>
                        <h3 id={styles.h3moon} className={styles.crew}><span>01</span>PICK YOUR DESTINATION</h3>
                         <img className={styles.img}
                        src="/destination/image-mars.png"
                        alt="Picture of mars"
                        />
                 </section>
                <section className={styles.destitext} >
                    <h1>MARS</h1>
                    <p className={styles.destip} >Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!</p>
                    <div className={styles.desdata} >
                         <div>
                             <p>AVG. DISTANCE</p>
                             <h4>225 MIL. KM</h4>
                         </div>
                         <div>
                             <p>EST. TRAVEL TIME</p>
                             <h4>9 MONTHS</h4>
                         </div>
                    </div>
                </section>
            </div>      
        </>
    )
}