import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/Shelves'
import SearchPage from './components/SearchPage'
import {Link, Route} from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
          <Route path = '/search'>
            <SearchPage/>
          </Route>
      
          <Route exact path = '/'>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              
              <div className="list-books-content">
                <Shelves/>
              </div>
              <Link to = '/search'>
                <div className="open-search">
                  <button>Add a book</button>
                </div>
              </Link>
            </div>
          </Route>
      </div>
    )
  }
}

export default BooksApp
