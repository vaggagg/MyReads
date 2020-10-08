import React from 'react';
import arrowDown from './icons/arrowDown.png';
import arrowUp from './icons/arrowUp.png'
import CategoryList from './CategoryList'
class Book extends React.Component{
  state={
    descIsVisible:false,
    subMenuIsVisible:false,
    arrow:arrowUp
  }
showDescription=()=>{
  this.setState({descIsVisible:!this.state.descIsVisible})
}
showSubmenu=()=>{
  this.setState({
    subMenuIsVisible:!this.state.subMenuIsVisible

  })
  if(this.state.subMenuIsVisible){
    this.setState({arrow:arrowUp})
  }
  else {
    this.setState({arrow:arrowDown})
  }
}
 render(){
   const Book=this.props.bookInfos
   return (
     <div className="BookTile">
     {this.state.subMenuIsVisible&&<CategoryList Book={Book} changeStatus={this.props.changeStatus}/>}
      {!this.state.subMenuIsVisible&&!this.state.descIsVisible&&<div className="ImageAndTitle"  onClick={this.showDescription}>
        <div className="BookImageContainer" >
        <img className="BookImage" src={Book.imageLinks.thumbnail}></img>
      </div>
      <div className="BookTitle">{Book.title}</div>
      </div>}
      {!this.state.subMenuIsVisible&&this.state.descIsVisible&&<div className="BookDescription"  onClick={this.showDescription}>
        <h4>{Book.title}</h4><br />
        <h5>Author:</h5>{Book.authors}<br /> <br />
        {Book.description}

      </div>}
      <div ><img className="BookArrow" src={this.state.arrow} onClick={this.showSubmenu}/></div>
     </div>
           );
         }
}

export default Book;
