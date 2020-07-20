import React, {Component} from 'react'
import Book from './Book'
import {getAll} from '../BooksAPI'

// @description Represents a bookshelf
// @constructor
// @param {string} title - An array of books
// @returns {string} author - The UI of the books in same shelf

export default class Bookshelf extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    {this.props.books.map(book => 
                        <Book 
                            title = {book.title} 
                            author = {book.author} 
                            backgroundImage = {book.backgroundImage} 
                            key = {book.id} 
                            id = {book.id}
                            shelf = {book.shelf}
                            editBook = {this.props.editBook}
                        />
                    )}
                </div>
            </div>
        )
    }
}
