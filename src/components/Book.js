import React, {Component} from 'react'
import Control from './Control'

// @description Represents a book
// @constructor
// @param {string} title - The title of the book
// @returns {object} book - The UI of the book

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    activeHover() {
        this.setState({
            hover: true
        })
    }

    inactiveHover() {
        this.setState({
            hover: false
        })
    }

    render () {
        const control =  <Control 
                            title = {this.props.title} 
                            author = {this.props.author} 
                            backgroundImage = {this.props.backgroundImage} 
                            id = {this.props.id} 
                            shelf = {this.props.shelf} 
                            editBook = {this.props.editBook}
                        />

        return (
            <div className="book">
                <div className="book-top" onMouseEnter = {this.activeHover.bind(this)} onMouseLeave = {this.inactiveHover.bind(this)}>
                    {(this.state.hover) ? <div className="book-cover-faded"></div> : null}
                    <div className="book-cover" 
                        style={{ 
                            width: 150, 
                            height: 200,
                            backgroundSize: 'contain', 
                            backgroundImage: `url(${this.props.backgroundImage})`
                        }}>
                    </div>
                    {(this.state.hover) ? control : null}
                </div>
    
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        )
    }
}
