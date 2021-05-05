import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';



class Times extends React.Component{
  render()
    {
      return <div className={styles.time}>
          <h5>{this.props.time}</h5>
        </div>
		}
	}
	export default Times;