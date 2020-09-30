import React from 'react';


 class Search extends React.Component{
  state={
    searchedBook:""
  }
updateQuery(text){
  this.setState({searchedBook:text})
  alert(this.state.searchedBook)
}
  render(){
    return (
      <div className="Search-Container">
      <input
        className='Search-Books'
        type='text'
        placeholder='Search Books'
        value={this.state.searchedBook}
        onChange={(event) => this.updateQuery(event.target.value)}
      />
      <div className="Search-Results"> </div>
      </div>
            );
          }
}

export default Search;
