import React, {Component} from 'react'
import Control from './Control'

// @description Represents a book
// @constructor
// @param {string} title - The title of the book
// @returns {object} book - The UI of the book

export default function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" 
                    style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(${props.backgroundImage})`
                    }}>
                </div>
                
                <Control id = {props.id} shelf = {props.shelf} moveBook = {props.moveBook}/>
            </div>

            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.author}</div>
        </div>
    )
}
