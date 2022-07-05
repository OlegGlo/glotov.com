
import React from 'react';

export const AboutSection = () => {

    const backgroundStyle = {
        position: 'relative',
        background: '#0E0E0E',
        // border: "1px solid #000000;",
        // width: '63%',
        // margin: '0 1.5%',
        height: '1000px',
        // flexDirection: 'row',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // float: 'left',
    }

    return (
        <main style = {backgroundStyle}>
            <div style ={{color: "white"}}>
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
        </main>
    )
}