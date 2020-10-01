import React from 'react';


 class Category extends React.Component{
  state={
    books:[]
  }

  render(){
    const books=this.props.books.filter(b=>b.shelf===this.props.category)
    return (
      <div className="Shelf-Container">
      <div className="Shelf-Category">
      {books.map((x)=><div>
        {x.title}</div>
      )}
      </div>
      <div className="Shelf-Title"> {this.props.name}</div>
      </div>
            );
          }
}

export default Category;
