import React from 'react';
class CategoryList extends React.Component{
  componentDidMount(){
      alert(this.props.Book.shelf)
    if(this.props.Book.shelf){
    document.getElementById(this.props.Book.id+"_"+this.props.Book.shelf).checked=true;
  }
else {
  document.getElementById(this.props.Book.id+"_none").checked=true;
}
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
