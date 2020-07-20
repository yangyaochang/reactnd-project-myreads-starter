import React, {Component} from 'react'
import Bookshelf from './Bookshelf'
import {getAll} from '../BooksAPI'

// @description Contains all shelves
// @constructor
// @param {string} title
// @returns {object} author - The whole page

export default class Shelves extends Component {
    constructor() {
        super();
        this.state = {
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
                        backgroundImage: book.imageLinks.thumbnail,
                        shelf: book.shelf
                        }
                })
            })            
        }) 
    }

    moveBook(targetShelf, id) {
        let books = [...this.state.books]

        books.forEach(book => {
            if (book.id === id) {
                book.shelf = targetShelf
            }
        })

        this.setState({
            books: books
        })
    }

    render() {
        const books = this.state.books

        return (
            <div>
                <Bookshelf shelf = {'Currently Reading'} books = {books.filter(book => book.shelf === 'currentlyReading')} moveBook = {this.moveBook.bind(this)}/>
                <Bookshelf shelf = {'Want to Read'} books = {books.filter(book => book.shelf === 'wantToRead')} moveBook = {this.moveBook.bind(this)}/>
                <Bookshelf shelf = {'Read'} books = {books.filter(book => book.shelf === 'read')} moveBook = {this.moveBook.bind(this)}/>
            </div>
            
        )
    }
}