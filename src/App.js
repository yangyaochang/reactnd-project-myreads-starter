import React from 'react'
import './App.css'
import Shelves from './components/Shelves'
import SearchPage from './components/SearchPage'
import {Link, Route} from 'react-router-dom'
import {getAll} from './BooksAPI'

// @description Represents the whole app, containing books data
// @constructor
// @param {string} title - 
// @returns {object} book - The UI of the whole app

class BooksApp extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [],
      id: null
    }
  }

  componentDidMount() {
    getAll().then(books => {
        console.log(books)

        books = books.map(book => {
          return {
              id: book.id,
              title: book.title,
              author: book.authors,
              backgroundImage: book.imageLinks.thumbnail,
              shelf: book.shelf
          }
        })
        
        let id = books.map(book => book.id)

        this.setState({
            books: books,
            id: new Set(id)
        })            
    }) 
  }

  editBook(id, target) {
      let books = [...this.state.books]

      if (this.state.id.has(id)) {
        books.forEach(book => {
          if (book.id === id) {
              book.shelf = target.shelf
          }
        })
      } else {
        books.push(target)
        this.state.id.add(target.id)
      }

      this.setState({
          books: books
      })
  }

  render() {
    return (
      <div className="app">
          <Route path = '/search'>
            <SearchPage editBook = {this.editBook.bind(this)}/>
          </Route>
      
          <Route exact path = '/'>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              
              <div className="list-books-content">
                <Shelves books = {this.state.books} editBook = {this.editBook.bind(this)}/>
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
