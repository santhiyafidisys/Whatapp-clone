import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';



class Times extends React.Component{
  render()
    {
      return <div >
          <h5 className={styles.time}>{this.props.time}</h5>
        </div>
		}
	}
	export default Times;