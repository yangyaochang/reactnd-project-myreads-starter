import React, {Component} from 'react'
import Book from './Book'
import {getAll} from '../BooksAPI'

// @description Represents a bookshelf
// @constructor
// @param {string} title - An array of books
// @returns {string} author - The UI of the books in same type

export default class Bookshelf extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const type = (this.props.type === 'Currently Reading') ? 'currentlyReading' :
                        (this.props.type === 'Want to Read') ? 'wantToRead' :
                        (this.props.type === 'Read') ? 'read' : null

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.type}</h2>
                <div className="bookshelf-books">
                    {this.props.books.map(book => 
                        <Book 
                            title = {book.title} 
                            author = {book.author} 
                            backgroundImage = {book.backgroundImage} 
                            key = {book.id} 
                            id = {book.id}
                            type = {type}
                            moveBook = {this.props.moveBook}
                        />
                    )}
                </div>
            </div>
        )
    }
}
