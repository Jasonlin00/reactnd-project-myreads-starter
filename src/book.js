import React from 'react'

let timer
export default class Book extends React.Component {
    state = {
        detailShowing: false,


    }

    componentWillUnmount() {
        clearTimeout(timer)
    }

    _checkboxHandler(e) {
        this.props.checkboxHandler(e.target.checked, this.props.book.id)
    }

    handleChange(e) {
        this.props.moveToCategoryFn(this.props.book, e.target.value)
    }

    showDetail() {
        const bookId = this.props.book.id
        this.props.setModalState(bookId)
        clearTimeout(timer)
        this.setState({
            detailShowing: true
        })
    }

    hideDetail() {
        timer = setTimeout(() => {
            this.setState({
                detailShowing: false
            })
        }, 500)
    }


    enterDetailModal() {
        clearTimeout(timer)
    }


    render() {
        const book = this.props.book
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}
                         onMouseEnter={this.showDetail.bind(this)}
                         onMouseLeave={this.hideDetail.bind(this)}
                    >
                    </div>
                    {
                        book.defaultSelected &&
                        <div>
                            <input type='checkbox'
                                   className='book-shelf-checkbox'
                                   checked={this.props.book.checked}
                                   onChange={this._checkboxHandler.bind(this)}/>
                        </div>
                    }
                    <div className="book-shelf-changer">

                        <select value={this.props.selected} onChange={this.handleChange.bind(this)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="none">None</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>

                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                {
                    this.state.detailShowing && book.id === this.props.bookId
                        ? <div className='book-detail-container'>
                            <div className='book-detail'
                                 onMouseEnter={this.enterDetailModal.bind(this)}
                                 onMouseLeave={this.hideDetail.bind(this)}>
                                <div className='detail-header'>
                                    <span className='title-font'>Title:{book.title}</span><br/>
                                    <span className='author-font'>Author:{book.authors || <span>unknown</span>}<br/>
                                        Categories:{book.categories || <span>unknown</span>}</span>
                                </div>
                                <div className='detail-content'>
                                    <span className='description-font'>
                                        Description:<br/>
                                        {book.description || <span>nothing</span>}
                                </span>
                                </div>
                                <div className='detail-footer'>
                                    <span className='footer-font'>
                                   Published Year :{book.publishedDate || <span>unknown</span>}<br/>
                                        {book.pageCount || <span>unknown</span>} Pages
                                   </span>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}


