import React, {Component} from 'react'

// @description Represents a book
// @constructor
// @param {string} title - The title of the book
// @returns {object} book - The UI of the book

export default class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }

    handleChange(event) {
        event.preventDefault()

        const preType = this.state.type
        const targetType = event.target.value
        const id = this.props.id

        this.props.moveBook(preType, targetType, id)
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select value = {this.state.type} onChange = {this.handleChange.bind(this)}>
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