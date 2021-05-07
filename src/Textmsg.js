import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';

class Textboxmsg extends React.Component{
    render()
      {
        return (
					<div >
						<h5 className={styles.msgtext}>{this.props.textmsg}</h5>
					</div>
				)
			}
		}
		export default Textboxmsg;