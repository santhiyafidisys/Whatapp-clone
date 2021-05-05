import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';
import Userdetails from './Userdetails';



class Layout extends React.Component {
  render()
  {
    return <div className={styles.container}>
      <div className={styles.green}></div>
      <div className={styles.grey}>
        <div className={styles.white}>
         <Userdetails name="Cool kids" time="10.14" image="dp1.png" />
         <Userdetails name="Family" time="10.15" image="dp2.png"/>
         <Userdetails name="Nicole Rammelmuller" time="10.15" image="dps3.png"/>
        </div>             
      </div>
    </div>
  }
 }
ReactDOM.render(<Layout />,document.getElementById('root'));
