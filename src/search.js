import React from 'react';
import Book from './Book';
import * as BooksAPI from './utils/BooksAPI';

 class Search extends React.Component{
  state={
    searchedBook:"",
    resultOfSearch:[]

  }
updateQuery=(text)=>{
  this.setState({searchedBook:text})
  BooksAPI.search(text).then(result=>{
    this.setState({resultOfSearch:result})
  })
}
  render(){
    const noBooksFound=this.state.resultOfSearch.length>0?false:true
    return (
      <div className="Search-Container">
      <input
        className='Search-Books'
        type='text'
        placeholder='Search Books'
        value={this.state.searchedBook}
        onChange={(event) => this.updateQuery(event.target.value)}
      />
      <div className="Search-Results">
      {!noBooksFound&&this.state.resultOfSearch.map(x =>
        <ul className="BookList">
        <li key={x.id}><Book bookInfos={x} changeStatus={this.props.changeStatus}/></li>
        </ul> )
      }
      {noBooksFound&&<p>No books were found</p>}
       </div>
      </div>
            );
          }
}

export default Search;
