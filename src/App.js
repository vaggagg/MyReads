import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Category from './category';
import Search from './search'
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
render(){
  return (
    <div className="App">

      <div class="App-Title"> MyReads App</div>
      <Route exact path='/' render={() => (
        <div className="Library">
         <Category name="Currently Reading" books={this.state.allBooks} category="currentlyReading"/>
         <Category name="Want to Read" books={this.state.allBooks} category="wantToRead"/>
         <Category name="Read" books={this.state.allBooks} category="read"/>
      <button className="open-search" />
      </div>
                                    )} />
    <Route path='/search' render={({ history }) => (
      <Search />

    )}/>
    </div>
  );
  }

}

export default App;
