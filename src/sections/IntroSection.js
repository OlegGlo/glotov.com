
// import Spline from '@splinetool/react-spline';
import React from 'react';
// import './AboutSection.module.css'

export const IntroSection = () => {

    const backgroundStyle = {
        position: 'relative',
        
        // border: "1px solid #000000;",
        // width: '63%',
        // margin: '0 1.5%',
        height: '1000px',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // float: 'left',
    }

    const splineBlockStyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',

        width: '100%',
        height: '100%',


        // margin: '0 1.5%',
        // width: '30%',

        // height: '30%',
        // width: '200px',
        // height: '200px',
        // float: 'right',
    }

    const textBlockStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '700px',
        overflow: 'visible',
        // float: 'left',

    }

    // const splineStyle = {
    //     // display: 'inline-block',
    //     // position: 'relative',
    //     // width: '200px',
    //     // height: '200px',
    //     // overflow: 'hidden',
    //     // borderRadius: '50%',
    // }

    const introStyle = {
        position: 'relative',
        top: '0px',
        left: '80px',
        width: '211px',
        height: '66px',
        fontFamily: 'Space Mono',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
        color: '#B5DC2A',
    }

    const h1Style = {
        position: 'relative',
        top: '-50px',
        left: '65px',
        "width": "730px",
        "height": "66px",
        "fontFamily": "'Helvetica'",
        "fontStyle": "normal",
        "fontWeight": "700",
        "fontSize": "64px",
        "lineHeight": "109.4%",
        "color": "#FFFFFF"
    }
    const h2Style = {
        position: 'relative',
        top: '-110px',
        left: '65px',
        "width": "1156px",
        "height": "66px",
        "fontFamily": "'Helvetica'",
        "fontStyle": "normal",
        "fontWeight": "700",
        "fontSize": "64px",
        "lineHeight": "109.4%",
        "color": "#FFFFFF"
    }

    const descriptionStyle = {
        position: 'relative',
        top: '-150px',
        left: '65px',
        // inlineSize: '150px',
        // "width": "200px",
        // "maxWidth": "600px",
        // "height": "66px",

        "overflowWrap": "break-word",
        "fontFamily": "'Helvetica'",
        "fontStyle": "normal",
        "fontWeight": "400",
        "fontSize": "16px",
        "lineHeight": "18px",
        "color": "#A4A6AE"
    }
    const buttonStyle = {
        position: 'relative',
        top: '-100px',
        left: '65px',
        "boxSizing": "border-box",
        "width": "230px",
        "height": "57px",
        "border": "1px solid #1FDD00",
        "borderRadius": "7px"
    }

    return (
        <main style={backgroundStyle}>
            <div style={textBlockStyle}>
                <div className='Intro' style={introStyle} >Hi, my name is</div>
                <h1 style={h1Style} >Oleg Glotov</h1>
                <h2 style={h2Style} >Software Engineer</h2>
                <p style={descriptionStyle} >I am a software engineering student at mcmaster U, currently looking for interesting projects to work on. This website is still in development, and everything is subject to change. Nam eu felis sed dolor suscipit interdum eget quis purus. </p>
                <button style={buttonStyle} >resume</button>
                <ul style = {{color: 'white'}}> todo:
                    <li>3d shit = black background </li>
                    <li>ask sasha to do proper css</li>
                    <li>add another page and animations</li>
                    <li>add nav bar and email fixed on the right/left</li>
                </ul>
            </div>
            <div style={splineBlockStyle}>
                {/* <Spline style={splineStyle} scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" /> */}
                <iframe title = 'title' src='https://my.spline.design/untitled-a0b69fa2c0061c28134dbb27a24ecb3a/' frameborder='0' width='100%' height='100%'></iframe>
            </div>

        </main>
    )
}