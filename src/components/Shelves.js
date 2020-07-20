import React, {Component} from 'react'
import Bookshelf from './Bookshelf'

// @description Contains all shelves
// @constructor
// @param {string} title
// @returns {object} author - The whole page

export default function Shelves(props) {
    return (
        <div>
            <Bookshelf shelf = {'Currently Reading'} books = {props.books.filter(book => book.shelf === 'currentlyReading')} editBook = {props.editBook}/>
            <Bookshelf shelf = {'Want to Read'} books = {props.books.filter(book => book.shelf === 'wantToRead')} editBook = {props.editBook}/>
            <Bookshelf shelf = {'Read'} books = {props.books.filter(book => book.shelf === 'read')} editBook = {props.editBook}/>
        </div>
    )
}