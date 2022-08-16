import React, {useContext} from 'react';
import styles from './Submited.module.css'
import {WidgetContext} from '../App.js'

const Submited = () => {
    const [chosen] = useContext(WidgetContext)
    return (
        <div className={styles.box}>
            <img src={require('./images/illustration-thank-you.svg').default}/>
            <div className={styles.boxForSelected}>{`You selected ${chosen} out of 5`}</div>
            <h1 className={styles.text}>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    );
};

export default Submited;