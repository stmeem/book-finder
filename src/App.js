import React, { Component } from "react";
import "./App.css";
import request from 'superagent';
import Book from './Book';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: '',
      noMatch: false
    }
  }
  _handleKeyDown=(e)=>{
    if(e.key==='Enter'){

    }
  }
  searchArea = (e) => {
    e.preventDefault();
    request.get('https://www.googleapis.com/books/v1/volumes').query({q: this.state.searchField})
    .then((response) => {
        this.setState({ books: [...response.body.items]})
      }).catch((error)=>{
        console.log(error);
        if(error instanceof TypeError){
          this.setState({
            noMatch:true
          })
        }
      }) 
  }
  handleSearch = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    return (
      <div className="App">
        <div className="header">
        <h4 className="text-center fontStyle">Book Finder </h4>
        </div>
        <form onSubmit={this.searchArea} className="form">
          <input type="text" className="input" placeholder="search books..." onChange={this.handleSearch}
          required onKeyDown={this._handleKeyDown}></input>
          <button type="submit" className="search"><i class="fa fa-search"></i></button>
        </form>
        <Book books={this.state.books} noMatch={this.state.noMatch} />
        <div className="footer-copyright text-center">
         Copyright &copy; stmeem <span role="img" aria-label="heart">💗</span>
      </div>
      </div>
    );
  }
}
export default App;