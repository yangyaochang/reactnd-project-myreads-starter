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
    
    componentDidMount() {
        getAll().then(books => {
            console.log(books)
            this.setState({
                books: books.map(book => {
                    return {
                        id: book.id,
                        title: book.title,
                        author: book.authors,
                        backgroundImage: book.imageLinks.thumbnail
                    }
                })
            })            
        }) 
    }

    handleChange = e => {
        const value = e.target.value
        search(value).then(books => {
            console.log(books)        
        })
        this.setState({
            searchText: value
        })
        
    }

    // search = (text) => {
    //     console.log(text)
    //     // To avoid modifying the original products data, use spread operator to shallow copy the array
    //     let books = [...this.state.books]

    //     books = books.filter(book => {

    //     })

    //     products = products.filter(p => {
    //         const matchedProduct = p.name.match(new RegExp(text, 'gi'))
    //         if (matchedProduct) {return matchedProduct}
    //     })

    //     this.setState({
    //         books: books
    //     })
    // }

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