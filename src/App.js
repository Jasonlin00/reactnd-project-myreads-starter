import React from 'react'
import Search from './search'
import List from './listBooks'
import {Route} from 'react-router-dom'
import './App.css'

const defaultLibrary = [{
    "title": "Android",
    "subtitle": "Earth Book One of the Android Saga",
    "authors": ["Paul J. Ward"],
    "publisher": "Strategic Book Publishing",
    "publishedDate": "2012-11-01",
    "description": "Humans and androids are learning to co-exist as equals, but there are many opposers who seek to subvert their own creations and rule with absolute power ...Humans, with their android creations loyally at their side, have colonised the Moon and Mars. The Earth and Colonies Defence Service (ECDS) keeps the colonies and space lanes safe. On Earth, the Android Protectorate League, led by the enigmatic android leader Traviod Selius, campaign for android rights legislation. However, they are strongly opposed by the Anti-Android Faction (AAF). Following the approval of the Human and Android Cohabitation Act, ECDS Chief of Operations Nakaar Bacvor and co-conspirators form the military wing of the AAF. The AAF attack the Moon and Mars colonies, but are repulsed by ECDS forces. On Earth, with the AAF seemingly defeated, humans and androids unite to create the city of Utopia. Threats from a reformed, more powerful AAF emerges and the crew of the ECDS flagship Harmonia must formulate a defence. The mysterious Evolved Androids appear on Earth with a sytoid child called Eirini, who has strange powers. Utopian Enforcement officer Rul Calibra becomes her unlikely guardian and protector.Humankind's destiny hangs in the balance in the first series installment ANDROID: Earth - Book One of the ANDROID Saga. Paul J. Ward was born in 1969 in Lincolnshire, England, on the day of the historic Apollo 11 moon landing. He has been fascinated by space exploration and technological developments his whole life. This is his first novel. Publisher's website: http: //sbpra.com/PaulJWar",
    "industryIdentifiers": [{"type": "ISBN_13", "identifier": "9781618971241"}, {
        "type": "ISBN_10",
        "identifier": "1618971247"
    }],
    "readingModes": {"text": false, "image": false},
    "pageCount": 446,
    "printType": "BOOK",
    "categories": ["Fiction"],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=xlp6NE2NWecC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=xlp6NE2NWecC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=xlp6NE2NWecC&printsec=frontcover&dq=android&hl=&cd=3&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=xlp6NE2NWecC&dq=android&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Android.html?hl=&id=xlp6NE2NWecC",
    "id": "xlp6NE2NWecC",
    "defaultSelected": "currentlyReading",
    "checked":false,
}, {
    "title": "Android Design Patterns",
    "subtitle": "Interaction Design Solutions for Developers",
    "authors": ["Greg Nudelman"],
    "publisher": "John Wiley & Sons",
    "publishedDate": "2013-02-19",
    "description": "Master the challenges of Android user interface development with these sample patterns With Android 4, Google brings the full power of its Android OS to both smartphone and tablet computing. Designing effective user interfaces that work on multiple Android devices is extremely challenging. This book provides more than 75 patterns that you can use to create versatile user interfaces for both smartphones and tablets, saving countless hours of development time. Patterns cover the most common and yet difficult types of user interactions, and each is supported with richly illustrated, step-by-step instructions. Includes sample patterns for welcome and home screens, searches, sorting and filtering, data entry, navigation, images and thumbnails, interacting with the environment and networks, and more Features tablet-specific patterns and patterns for avoiding results you don't want Illustrated, step-by-step instructions describe what the pattern is, how it works, when and why to use it, and related patterns and anti-patterns A companion website offers additional content and a forum for interaction Android Design Patterns: Interaction Design Solutions for Developers provides extremely useful tools for developers who want to take advantage of the booming Android app development market.",
    "industryIdentifiers": [{"type": "ISBN_13", "identifier": "9781118417553"}, {
        "type": "ISBN_10",
        "identifier": "1118417550"
    }],
    "readingModes": {"text": true, "image": true},
    "pageCount": 456,
    "printType": "BOOK",
    "categories": ["Computers"],
    "averageRating": 5,
    "ratingsCount": 1,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "1.4.3.0.preview.3",
    "panelizationSummary": {"containsEpubBubbles": false, "containsImageBubbles": false},
    "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=Ifg1ZpSo7cwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=Ifg1ZpSo7cwC&printsec=frontcover&dq=android&hl=&cd=4&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=Ifg1ZpSo7cwC&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-Ifg1ZpSo7cwC",
    "id": "Ifg1ZpSo7cwC",
    "defaultSelected": "currentlyReading",
    "checked":false,
}, {
    "title": "Android Apps Security",
    "authors": ["Sheran Gunasekera"],
    "publisher": "Apress",
    "publishedDate": "2012-09-12",
    "description": "Android Apps Security provides guiding principles for how to best design and develop Android apps with security in mind. It explores concepts that can be used to secure apps and how developers can use and incorporate these security features into their apps. This book will provide developers with the information they need to design useful, high-performing, and secure apps that expose end-users to as little risk as possible. Overview of Android OS versions, features, architecture and security. Detailed examination of areas where attacks on applications can take place and what controls should be implemented to protect private user data In-depth guide to data encryption, authentication techniques, enterprise security and applied real-world examples of these concepts What you’ll learn How to identify data that should be secured How to use the Android APIs to ensure confidentiality and integrity of data How to build secure apps for the enterprise About Public Key Infrastructure, encryption APIs and how to implement them in apps About owners, access control lists and permissions to allow user control over App properties About client-server apps and how to manage authentication, transport layer encryption and server-side security Who this book is for This book is for intermediate and experienced Android app developers that are already familiar with writing apps from scratch. It discusses mechanisms on how apps can be secured so that private, end-user data is kept secure on the device and while in transit. If you’re just embarking on the path to Android development, then this book may prove to be a useful companion to other developer guides. Table of Contents Android Architecture & Security Controls The Foundation of an App Who Has Access? Designing and Developing 3 Sample Apps Using PKI & Encryption Interfacing with Web Services Writing for the Enterprise Designing and Developing 3 More Sample Apps Publishing and Selling Your Apps Malware, Spyware and Your End-User API Reference",
    "industryIdentifiers": [{"type": "ISBN_13", "identifier": "9781430240624"}, {
        "type": "ISBN_10",
        "identifier": "1430240628"
    }],
    "readingModes": {"text": true, "image": true},
    "pageCount": 248,
    "printType": "BOOK",
    "categories": ["Computers"],
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "1.1.1.0.preview.3",
    "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=IEk2m00o9_IC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=IEk2m00o9_IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=IEk2m00o9_IC&printsec=frontcover&dq=android&hl=&cd=5&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=IEk2m00o9_IC&dq=android&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/Android_Apps_Security.html?hl=&id=IEk2m00o9_IC",
    "id": "IEk2m00o9_IC",
    "defaultSelected": "read",
    "checked":false,
}, {
    "title": "The Android Book",
    "authors": ["Imagine Publishing"],
    "publisher": "Imagine Publishing",
    "industryIdentifiers": [{"type": "ISBN_13", "identifier": "9781908222510"}, {
        "type": "ISBN_10",
        "identifier": "1908222514"
    }],
    "readingModes": {"text": true, "image": true},
    "printType": "BOOK",
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": true,
    "contentVersion": "1.1.1.0.preview.3",
    "panelizationSummary": {"containsEpubBubbles": false, "containsImageBubbles": false},
    "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=Dco57IRQnLEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=Dco57IRQnLEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=Dco57IRQnLEC&printsec=frontcover&dq=android&hl=&cd=10&source=gbs_api",
    "infoLink": "https://play.google.com/store/books/details?id=Dco57IRQnLEC&source=gbs_api",
    "canonicalVolumeLink": "https://market.android.com/details?id=book-Dco57IRQnLEC",
    "id": "Dco57IRQnLEC",
    "defaultSelected": "wantToRead",
    "checke":false,
}]


class BooksApp extends React.Component {
    state = {
        books: defaultLibrary,
        bookId: null,
        checkedBooks: [],
        selectAll: false,

    }

    componentWillMount() {

        const library = JSON.parse(localStorage.getItem('library'))

        if (!library) {
            localStorage.setItem('library', JSON.stringify(this.state.books))
        }

        this.setState({
            books: JSON.parse(localStorage.getItem('library'))
        })
    }

    componentDidUpdate() {
        localStorage.setItem('library', JSON.stringify(this.state.books))

    }
    componentDidMount(){
        const Books=this.state.books.map(item=>{
            item.checked=false
            return item
        })
        console.log(Books)
        this.setState({
            books:Books
        })
    }

    _selectAllFn(checked) {
        const Books = this.state.books
        Books.forEach(item => item.checked = checked)
        this.setState({
            books: Books
        })


    }
    _selectedBooksChangeHandler(value){
        const Books=this.state.books.map(item=> {
            if (item.checked) {
                item.defaultSelected = value
            }
            return item
        })
        this.setState({
            books:Books
        })

    }

    _checkboxHandler(checked, id) {
        const Books = this.state.books
        Books.forEach(item => {
            if (item.id === id) {
                item.checked = checked
            }
        })
        this.setState({
            books: Books
        })
    }

    setModalState(id) {
        this.setState({
            bookId: id
        })
    }


    moveToCategoryFn(book, selected) {

        let books = this.state.books
        const match = new RegExp(book.id)
        if (books.length !== 0) {
            const alreadyAdded = books.filter(item => match.test(item.id))
            if (alreadyAdded.length === 0) {
                book.defaultSelected = selected
                this.setState(state => ({
                    books: state.books.concat(book)
                }))
            } else {
                books.forEach(item => {
                    if (book.id === item.id) {
                        item.defaultSelected = selected
                        item.checked=false
                    }
                })
                this.setState({
                    books: books
                })
            }

        }
    }

    render() {
        return (
            <div className="app">
                <Route
                    exact path='/'
                    render={() => (
                        <List
                            moveToCategoryFn={this.moveToCategoryFn.bind(this)}
                            books={this.state.books}
                            setModalState={this.setModalState.bind(this)}
                            bookId={this.state.bookId}
                            checkboxHandler={this._checkboxHandler.bind(this)}
                            selectAllFn={this._selectAllFn.bind(this)}
                            selectAll={this.state.selectAll}
                            selectedBooksChangeHandler={this._selectedBooksChangeHandler.bind(this)}
                        />
                    )}
                />
                <Route
                    path='/search'
                    render={({history}) => (
                        <Search
                            history={history}
                            moveToCategoryFn={this.moveToCategoryFn.bind(this)}
                            books={this.state.books}
                            setModalState={this.setModalState.bind(this)}
                            bookId={this.state.bookId}
                            checkboxHandler={this._checkboxHandler.bind(this)}
                            selectAll={this.state.selectAll}
                        />
                    )}

                />

            </div>
        )
    }
}

export default BooksApp
