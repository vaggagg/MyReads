import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Category from './category';
import Search from './search'
import {Link} from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI';

class App extends React.Component {
  state={
      allBooks:[]
      }
      componentDidMount() {
        BooksAPI.getAll().then((allBooks) => {
          this.setState({allBooks:allBooks})
        })
      }
changeStatus=(book,selectedShelf)=>
{
  BooksAPI.update(book,selectedShelf).then((e)=>{
    BooksAPI.getAll().then((allBooks) => {
      this.setState({allBooks:allBooks})
    })
  })
}

render(){
  return (
    <div className="App">

      <div class="App-Title"> MyReads App</div>
      <Route exact path='/' render={() => (
        <div className="Library">
         <Category name="Currently Reading" books={this.state.allBooks.filter(b=>b.shelf==="currentlyReading")} category="currentlyReading" changeStatus={this.changeStatus}/>
         <Category name="Want to Read" books={this.state.allBooks.filter(b=>b.shelf==="wantToRead")} category="wantToRead" changeStatus={this.changeStatus}/>
         <Category name="Read" books={this.state.allBooks.filter(b=>b.shelf==="read")} category="read" changeStatus={this.changeStatus} />
         <Link to="/search">
         <button>Search for more Books</button>
         </Link>
      </div>
                                    )} />
    <Route path='/search' render={({ history }) => (
      <div>
      <Link to="/">
      <button>Go back to your library</button>
      </Link>
      <Search changeStatus={this.changeStatus}/>
      </div>
    )}/>
    </div>
  );
  }

}

export default App;
