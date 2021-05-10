import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';
import Avatar from './Avatar';





class Rightbox extends React.Component{
  render()
    {
      return(
      <img className={styles.background} src={this.props.background} alt="dp1.png"/>
     
      )
    }
	}
export default Rightbox;