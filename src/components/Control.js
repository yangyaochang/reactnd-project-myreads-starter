import React, {Component} from 'react'

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

        this.setState({
            shelf: targetShelf
        })
        
        this.props.moveBook(targetShelf, id)
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