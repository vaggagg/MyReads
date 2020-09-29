import React from 'react';
import './App.css';
import Category from './category';
import * as BooksAPI from './utils/BooksAPI';

class App extends React.Component {
  state={
    shelves:{
      c_reading:[],
      want_to_read:[],
      read:[]},
      allBook:[]
      }
      componentDidMount() {
        BooksAPI.getAll().then((books) => {
          console.log(books)
        })
        console.log(this.state.shelves.c_reading)
      }
render(){
  return (
    <div className="App">
      <div class="App-Title"> MyReads App</div>
      <Category name="Currently Reading" books={this.state.shelves.c_reading} />
      <Category name="Want to Read" books={this.state.shelves.want_to_read} />
      <Category name="Read" books={this.state.shelves.read} />
    </div>
  );
  }

}

export default App;
