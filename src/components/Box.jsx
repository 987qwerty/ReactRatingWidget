import React, {useState, useContext} from 'react';
import styles from './Box.module.css'
import RaitingBar from './RatingBar.jsx'
import {WidgetContext} from '../App.js'
const Box = () => {
    const [chosen, setChosen, isSubmited, setIsSubmited] = useContext(WidgetContext)
    return (
        <div className={styles.box}>
            <div className={styles.imgWrapper}>
                <img src={require('./images/icon-star.svg').default}/>
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <RaitingBar/>
            <button className={styles.btn} disabled={chosen === 0} onClick={() => setIsSubmited(true)}>Submit</button>
        </div>
    );
};

export default Box;