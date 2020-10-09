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
    const noBooksFound=(this.state.resultOfSearch===undefined||!this.state.resultOfSearch.length>0)?true:false
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
      {!noBooksFound&&<ul className="BookList">
      {this.state.resultOfSearch.map(x =>
        <li key={x.id}><Book bookInfos={x} changeStatus={this.props.changeStatus}/></li>
      )}
        </ul>
      }
      {noBooksFound&&<p className="noBooksFound"><b>No books were found</b></p>}
       </div>
      </div>
            );
          }
}

export default Search;
