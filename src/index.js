import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';
import styles from './Whatapp.module.css';


class Layout extends React.Component {
  render()
  {
    return <div className={styles.container}>
      <div className={styles.green}></div>
        <div className={styles.grey}>
        <div className={styles.white}>
        <Avatar /></div>             
        
          </div>
        </div>
       
      
     
     
  }
 
}
ReactDOM.render(<Layout/>,document.getElementById('root'));
