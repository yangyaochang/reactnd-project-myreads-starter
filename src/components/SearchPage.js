import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {getAll, search} from '../BooksAPI'
import Book from './Book'

// @description Represents a Control
// @constructor
// @param {string} title - The id and type of a book
// @returns {object} book - The UI of the control

export default class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            books: []
        }
    }
    
    handleChange = e => {
        const value = e.target.value
        if (value !== '') {}
        search(value).then(books => {
            console.log(books)  
            this.setState({
                books: books.map(book => {
                    return {
                        id: book.id,
                        title: book.title,
                        author: book.authors,
                        backgroundImage: book.imageLinks.thumbnail
                    }
                }),
                searchText: value
            })                  
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to = '/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value = {this.state.searchText}
                            onChange = {this.handleChange}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/* <div className="bookshelf-books"> */}
                            {this.state.books.map(book => 
                                <Book 
                                    title = {book.title} 
                                    author = {book.author}
                                    backgroundImage = {book.backgroundImage} 
                                    key = {book.id} 
                                    id = {book.id}
                                />
                            )}
                        {/* </div> */}
                    </ol>
                </div>
            </div>
        )
    }
}