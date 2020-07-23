import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {search} from '../BooksAPI'
import Book from './Book'

// @description Represents the search page
// @constructor
// @param {string} title - editBook() function
// @returns {object} book - The UI of search page

export default class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            books: [],
            found: true
        }
    }
    
    handleChange = event => {
        event.preventDefault()
        const value = event.target.value

        this.setState({
            searchText: value
        })

        if (value !== '') {this.updateList(value)}
        else {this.clearList()}
    }

    updateList(value) {
        search(value).then(books => {
            console.log(books)

            if (books.error) {
                this.setState({
                    found: false
                })
            } else {
                let list = this.getAssignedBooks()

                this.setState({
                    books: books.map(book => {
                        return {
                            id: book.id,
                            title: book.title,
                            author: ('authors' in book) ? book.authors : null,
                            backgroundImage: ('imageLinks' in book) ? book.imageLinks.thumbnail : null,
                            shelf: (book.id in list) ? list[book.id] : 'none'
                        }
                    }),
                    found: true
                }) 
            }        
        })
    }

    clearList() {
        this.setState({
            books: []
        }) 
    }

    getAssignedBooks() {
        let list = {}

        this.props.books.forEach(book => {
            list[book.id] = book.shelf
        })

        return list
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to = '/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
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
                        {(this.state.found) ? this.state.books.map(book => 
                            <Book 
                                title = {book.title} 
                                author = {book.author}
                                backgroundImage = {book.backgroundImage} 
                                key = {book.id} 
                                id = {book.id}
                                shelf = {book.shelf}
                                editBook = {this.props.editBook}
                            />
                        ) : <div className='no-result-msg'>No Results Found</div>}
                    </ol>
                </div>
            </div>
        )
    }
}