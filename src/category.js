import React from 'react';
import * as BooksAPI from './utils/BooksAPI';


 class Category extends React.Component{
  state={
  }

  render(){
    return (
      <div className="Shelf-Container">
      <div className="Shelf-Category"></div>
      <div className="Shelf-Title"> {this.props.name}</div>
      </div>
            );
          }
}

export default Category;
