import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';
import Userdetails from './Userdetails';
import Search from './Searchbox';
import Leftmenu from './Leftcontainer';
import Rightmenu from './Rightcontainer';
import Avatar from './Avatar';
import Rightbox from './Rightchatbox';


class Layout extends React.Component {
  render()
  {
    return <div className={styles.container}>
      <div className={styles.green}></div>
      <div className={styles.grey}>
        <div className={styles.white}>
          <div className={styles.side}>
            <div className={styles.rowleft}>
              <Leftmenu />
              <Search />
              <Userdetails name="Cool kids" time="10.14" image="dp1.png" textmsg="whatApp Web Template Free Download"/>
              <Userdetails name="Family" time="10.15" image="dp2.png" textmsg="ich schatze so um 7 uhr, aber melde mich"/>
              <Userdetails name="Nicole Rammelmuller" time="10.15" image="dps3.png" textmsg="Ja Klar!"/>
              <Userdetails name="Marina" time="17.41" image="dps4.png" textmsg="Ja Klar!"/>
              <Userdetails name="Papa" time="17.31" image="dps5.png" textmsg="kein Problem:)"/>
              <Userdetails name="Mama" time="17.21" image="dps6.png" textmsg="Bis Frietag"/>
              <Userdetails name="Linda Gahletiner" time="16.50" image="dps7.png" textmsg="Jap, ich bin um circa 15.00 auf der"/>
            </div>
            <div className={styles.chattext}>
              <Rightmenu />
              <div >
              <Rightbox background="whatsapp.png"/>
              

              </div>
            
            
           
           
            </div>

          </div>
          
        </div>             
      </div>
    </div>
  }
 }
ReactDOM.render(<Layout />,document.getElementById('root'));
