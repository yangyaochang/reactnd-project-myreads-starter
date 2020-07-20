import React, {Component} from 'react'
import {update} from '../BooksAPI'

// @description Represents a Control
// @constructor
// @param {string} title - The id and type of a book
// @returns {object} book - The UI of the control

export default class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shelf: null
        }
    }

    handleChange(event) {
        event.preventDefault()
        const targetShelf = event.target.value
        const id = this.props.id
        const book = {
            id: this.props.id,
            title: this.props.title,
            author: this.props.author,
            backgroundImage: this.props.backgroundImage,
            shelf: targetShelf
        }

        this.setState({
            shelf: targetShelf
        })

        update(book, targetShelf).then(res => {console.log(res)})
        
        this.props.editBook(id, book)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value = {this.state.shelf || this.props.shelf} onChange = {this.handleChange.bind(this)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}