# MyReads Project

The project is a bookshelf app that allows users to select and categorize books they have read, are currently reading, or want to read. The project emphasizes using React to build the application and calling data from a backend API.

## TL;DR

* To view the project right away, please go to this [link]()

* If you choose to run it locally, you might need to run the commands below after you clone this repo.

    * install all project dependencies with `npm install`
    * start the development server with `npm start`

## App Functionality

#### Main Page

In this application, the main page displays a list of "shelves", each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets users select the shelf for that book, moving a book to another shelf.

#### Search Page

The main page also has a link to `/search`, a search page that allows users to find books to add to their library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets users add the book to their library. 


## Backend

All books in this project are called from a backend API. It uses a fixed set of cached search results and is limited to a particular set of search terms. That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
