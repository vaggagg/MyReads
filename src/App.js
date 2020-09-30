import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Category from './category';
import Search from './search'
import * as BooksAPI from './utils/BooksAPI';

class App extends React.Component {
  state={
    shelves:{
      c_reading:[],
      want_to_read:[],
      read:[]},
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
      <Route  path='/' render={() => (
        <div>
      <Category name="Currently Reading" books={this.state.shelves.c_reading} />
      <Category name="Want to Read" books={this.state.shelves.want_to_read} />
      <Category name="Read" books={this.state.shelves.read} />
      </div>
                                    )} />
    <Route path='/create' render={({ history }) => (
      <Search />

    )}/>
    </div>
  );
  }

}

export default App;
