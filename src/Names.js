import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';


class Names extends React.Component{
  render()
    {
      return <div className={styles.text}>
        <h5>{this.props.name}</h5>
				</div>
		}
}
export default Names;