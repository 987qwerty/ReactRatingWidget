import React, {useContext} from 'react';
import styles from './RatingBar.module.css'
import {WidgetContext} from '../App.js'

const RatingBar = () => {
    const [chosen, setChosen] = useContext(WidgetContext)
    const GetRating = (props) => {
        let numbers = []
        for(let i = 1; i <= props.num; i++){
            numbers.push(
                <button
                    className={`${styles.num} 
                    ${i === chosen ? styles.numActive : ""}`}
                    onClick={() => setChosen(i)}
                    key={i}>
                    {i}
                </button>)
        }
        return numbers
    }
    return (
        <div className={styles.wrapper}>
            <GetRating num={5}/>
        </div>
    );
};

export default RatingBar;