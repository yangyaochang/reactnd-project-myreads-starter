import React, {Component} from 'react'
import Control from './Control'

// @description Represents a book
// @constructor
// @param {string} title - The title of the book
// @returns {object} book - The UI of the book

export default class Book extends Component {
    constructor(props) {
        super(props);
    }


//<Book title = {book.title} author = {book.author} backgroundImage = {book.backgroundImage}/>
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${this.props.backgroundImage})`
                        }}>
                    </div>
                    
                    <Control id = {this.props.id} type = {this.props.type} moveBook = {this.props.moveBook}/>
                </div>

                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        )
    }
}
