import React from 'react';
import * as BooksAPI from './utils/BooksAPI';
class CategoryList extends React.Component{
  componentDidMount(){
  BooksAPI.get(this.props.Book.id).then((book)=>{
    document.getElementById(book.id+"_"+book.shelf).checked=true;
  })
}
  changeStatus=(e)=>{
  this.props.changeStatus(this.props.Book,e.target.value)
  }
  render(){
    const Book=this.props.Book
    return(
      <div className="ListOfCategories">
      Choose the category of the book:
        <form onChange={this.changeStatus}>
          <input type="radio" id={`${Book.id}_read`} name="category" value="read" />
          <label htmlfor="read">Read</label><br />
          <input type="radio" id={`${Book.id}_currentlyReading`} name="category" value="currentlyReading" />
          <label htmlfor="currentlyReading">Currently Reading</label><br />
          <input type="radio" id={`${Book.id}_wantToRead`} name="category" value="wantToRead" />
          <label htmlfor="wantToRead">Want to Read</label><br />
          <input type="radio" id={`${Book.id}_none`} name="category" value="none" />
          <label htmlfor="none">None</label>
        </form>
      </div>
    )
  }
}
export default CategoryList;
