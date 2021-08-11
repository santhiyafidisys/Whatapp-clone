import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';
import Userdetails from './Userdetails';
import Avatar from './Avatar';
class Leftmenu extends React.Component{
  render()
    {
      return (
				<div className={styles.menu}>
					<Avatar image="dps8.png"/>
					<div className={styles.menuright}>
					<i class="fa fa-envelope"></i>	
					<div>
						<div className={styles.leftside}></div>
						<div className={styles.leftside}></div>
						<div className={styles.leftside}></div>
					</div>
					</div>
				</div>
			)
    }
  }
export default Leftmenu;