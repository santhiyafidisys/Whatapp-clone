import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';
import Userdetails from './Userdetails';
import Avatar from './Avatar';
import Times from './Timesdetails';
import Names from './Username';
import Textboxmsg from './Textmsg';
import Chatbox from './Chats';


class Rightmenu extends React.Component{
    render()
      {
        return (
					<div className={styles.menu}>
						
						 <Avatar image="dp1.png"/>
						 <div className={styles.chatspace}>
						 <Names name="cool kids"/>
						 <Textboxmsg textmsg="whatApp Web Template Free Download"/>
						 </div>
						 
						 
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
      export default Rightmenu;