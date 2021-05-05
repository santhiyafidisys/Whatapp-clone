import React from 'react';
import styles from './Whatapp.module.css';
import Avatar from './Avatar';
import Times from './Times';
import Names from './Names';

class Userdetails extends React.Component{
    render()
      {
        return (
					<div className={styles.row}>
          <div className={styles.dp}>
						<Avatar image={this.props.image}/>
						<Names  name={this.props.name}/>
						<Times time={this.props.time}/>
					</div>
				</div>
				)
			}
		}
		export default Userdetails;

				
