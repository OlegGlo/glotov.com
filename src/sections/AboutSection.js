
import React from 'react';
import me from '../content/me.png';
import styles from './AboutSection.module.css'

export const AboutSection = () => {

    // const backgroundStyle = {
    //     position: 'relative',
        
    //     // border: "1px solid #000000;",
    //     // width: '63%',
    //     // margin: '0 1.5%',
    //     height: '1000px',
    //     // flexDirection: 'row',
    //     // display: 'flex',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //     // float: 'left',
    // }

    return (
        <main className={styles.background}>
            <div className={styles.sectionText}>
                <div className={styles.sectionTitle}>
                    <h1>01. About me</h1>
                </div>
                <div>
                    <p>
                        paragraph 1
                    </p>
                    <br></br>
                    <p>
                        paragraph 1
                    </p>
                </div>
                <div>
                    <ul> stack
                        <li>c++ </li>
                        <li>vim</li>
                        <li>c--</li>
                        <li>c hashtag</li>
                    </ul>
                </div>
            </div>
            <div className={styles.sectionImage}>
                <img src = {me} alt = 'myself'/>
            </div>
        </main>
    )
}