import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from "./book";


export default class Search extends React.Component {
    state = {
        books: [],
        queryError: false
    }

    searchBooks(query) {
        if (query) {
            BooksAPI.search(query.trim()).then(data => {
                if (data.error) {
                    this.setState({
                        queryError: true
                    })
                } else {
                    this.setState({
                        books: data,
                        queryError: false
                    })
                }
            })
        }
    }

    renderBooks() {
        let books = this.state.books
        const library = this.props.books
        for (let i = 0; i < library.length; i++) {
            for (let j = 0; j < books.length; j++) {
                if (books[j].id === library[i].id) {
                    books[j].defaultSelected = library[i].defaultSelected
                }
            }
        }
        if (books.length !== 0) {
            return (
                <ol className='books-grid'>
                    {
                        books.map(book => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    moveToCategoryFn={this.props.moveToCategoryFn}
                                    selected={book.defaultSelected}
                                    setModalState={this.props.setModalState}
                                    bookId={this.props.bookId}
                                    checkboxHandler={this.props.checkboxHandler}
                                />
                            </li>
                        ))
                    }
                </ol>
            )
        }


    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => {
                        this.props.history.push('/')
                    }}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input
                            onChange={(event) => {
                                this.searchBooks(event.target.value)
                            }}
                            type="text"
                            placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.queryError
                        ? <p style={{color: 'gray'}}>Sorry! Failed to find the result you want!</p>
                        : this.renderBooks()}
                </div>
            </div>



        )
    }
}
