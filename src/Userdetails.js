import React from 'react';
import styles from './Whatapp.module.css';
import Avatar from './Avatar';
import Times from './Timesdetails';
import Names from './Username';
import Textboxmsg from './Textmsg';
import Chatbox from './Chats';

class Userdetails extends React.Component{
    render()
      {
        return (
					
					<div className={styles.row}>
							<Chatbox />
          			<div className={styles.dp}>
									<Avatar image={this.props.image}/>
								<div className={styles.chatspace}>
									<Names  name={this.props.name}/>
									<Textboxmsg textmsg={this.props.textmsg}/>
								</div>
								<Times time={this.props.time}/>
								</div>
								</div>
					
				)
			}
		}
		export default Userdetails;

				
