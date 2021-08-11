import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';
class Names extends React.Component{
  render()
    {
      return (
        <div>
          <h4 className={styles.textdel}>{this.props.name}</h4>
				</div>
      )
		}
}
export default Names;