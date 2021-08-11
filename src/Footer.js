import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
class Bottom extends React.Component{
  render(){
    return(
      <div className={styles.textbox}>
				<span>&#9786;</span>
        <input className={styles.chattexts} type="text" placeholder="Schreibe enine Nachricht " name=""></input>
				<i class="fa fa-microphone"></i>
			</div>
		)
  }
}
export default Bottom;