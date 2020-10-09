import React from 'react';
import Book from './Book';


 class Category extends React.Component{
  state={
    books:[]
  }

  render(){
    return (
      <div className="Shelf-Container">
      <div className="Shelf-Category">
      <ul className="BookList">
      {this.props.books.map((x,index) =>

        <li key={index}><Book bookInfos={x} changeStatus={this.props.changeStatus}/></li>

      )}
      </ul>
      </div>
      <div className="Shelf-Title"> {this.props.name}</div>
      </div>
            );
          }
}

export default Category;
