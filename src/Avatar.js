import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';

class Avatar extends React.Component{
  render()
    {
      return <img  className={styles.image} src={this.props.image} alt="dp1.png"/>
    }
	}
export default Avatar;