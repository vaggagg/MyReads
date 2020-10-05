import React from 'react';
class CategoryList extends React.Component{
  componentDidMount(){
document.getElementById(this.props.Book.id+"_"+this.props.Book.shelf).checked=true;
  }
  render(){
    const Book=this.props.Book
    return(
      <div className="ListOfCategories">
        <form>
          <input type="radio" id={`${Book.id}_read`} name="category" value="read" />
          <label htmlfor="read">Read</label><br />
          <input type="radio" id={`${Book.id}_currentlyReading`} name="category" value="currentlyReading" />
          <label htmlfor="currentlyReading">Currently Reading</label><br />
          <input type="radio" id={`${Book.id}_wantToRead`} name="category" value="wantToRead" />
          <label htmlfor="wantToRead">Want to Read</label><br />
          <input type="radio" id={`${Book.id}_other`} name="category" value="other" />
          <label htmlfor="other">Other</label>
        </form>
      </div>
    )
  }
}
export default CategoryList;
