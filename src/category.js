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
      {this.props.books.map(x =>
        <ul className="BookList">
        <li key={x.id}><Book bookInfos={x} changeStatus={this.props.changeStatus}/></li>
        </ul> )
      }
      </div>
      <div className="Shelf-Title"> {this.props.name}</div>
      </div>
            );
          }
}

export default Category;
