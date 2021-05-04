import { logDOM } from '@testing-library/dom';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';

class Avatar extends React.Component{
    render()
    {
        return <div className={styles.row}>
                <div className={styles.dp}>
                <img className={styles.image} src="dp1.png" alt="dp1.png"/>
                <div className={styles.text}>
                <h5>Cool Kids</h5>
            <h6>whatapp web template free downloads</h6>

                </div>
                <div className={styles.time}>
                    <h5>8:51</h5>
                </div>
            
            </div>
           
            </div>
            
           

    
    }

}
export default Avatar;