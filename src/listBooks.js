import React from 'react'
import {Link} from 'react-router-dom'

import Book from './book'

export default class List extends React.Component {
    state = {
        books: this.props.books
    }

    _selectAllFn(e) {
        this.props.selectAllFn(e.target.checked)
    }
    _selectedBooksChangeHandler(e){
        console.log(e.target.value)
        this.props.selectedBooksChangeHandler(e.target.value)
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>

                    <div className='list-books-option'>
                        <span className='selectAll-checkbox'>
                        <input type="checkbox" onClick={this._selectAllFn.bind(this)}/>selectAll
                        </span>
                        <select onChange={this._selectedBooksChangeHandler.bind(this)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="none">None</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.books.filter((book) => book.defaultSelected === 'currentlyReading')
                                        .map(book =>
                                            <li key={book.id}>
                                                <Book
                                                    moveToCategoryFn={this.props.moveToCategoryFn}
                                                    book={book}
                                                    selected={book.defaultSelected}
                                                    setModalState={this.props.setModalState}
                                                    bookId={this.props.bookId}
                                                    checkboxHandler={this.props.checkboxHandler}

                                                />


                                            </li>)}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.books.filter((book) => book.defaultSelected === 'wantToRead')
                                        .map(book =>
                                            <li key={book.id}>
                                                <Book
                                                    book={book}
                                                    moveToCategoryFn={this.props.moveToCategoryFn}
                                                    selected={book.defaultSelected}
                                                    setModalState={this.props.setModalState}
                                                    bookId={this.props.bookId}
                                                    checkboxHandler={this.props.checkboxHandler}

                                                />
                                            </li>)}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.books.filter((book) => book.defaultSelected === 'read')
                                        .map(book =>
                                            <li key={book.id}>
                                                <Book
                                                    moveToCategoryFn={this.props.moveToCategoryFn}
                                                    book={book}
                                                    selected={book.defaultSelected}
                                                    setModalState={this.props.setModalState}
                                                    bookId={this.props.bookId}
                                                    checkboxHandler={this.props.checkboxHandler}

                                                />
                                            </li>)}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="open-search">
                    <Link to='/search' className="open-search"/>
                </div>
            </div>
        )
    }

}