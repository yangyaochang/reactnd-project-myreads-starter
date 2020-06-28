import React, {Component} from 'react'
import Book from './Book'
import {getAll} from '../BooksAPI'

// @description Represents a book
// @constructor
// @param {string} title - The title of the book
// @returns {string} author - The author of the book

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
