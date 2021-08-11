import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Whatapp.module.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
class Search extends React.Component{
  render(){
    return(
      <div className={styles.searchbox}>
        <i class="fa fa-search"></i>
        <input className={styles.searchicon} type="text" placeholder="Suden oder neuen chat beginnen" name=""></input>
      </div>
		)
  }
}
export default Search;