import React, {Component}  from 'react';
import BooksList from './js/components/BooksList.js';
import AdminPage from'./js/components/AdminPage';
import History from "./js/components/History";
import ShoppingBasket from "./js/components/ShoppingBasket";
import './css/components/app.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class  App extends Component  {

  constructor(props) {
      super(props);
      this.state= {
        books: [
        {id: 0, name: 'Zero to one' , author: 'Peter Tailor', price:25},
        {id: 1, name: 'React', author: 'Stephan Philip',price:25},
        {id: 2, name: 'C++ for beginers', author: 'Cohen Boilter', price:25}
        ],
        selectedBooks: [],
        orders: []
      }
      this.addToCart = this.addToCart.bind(this);
      this.addNewBook = this.addNewBook.bind(this);
      this.addNewOrder = this.addNewOrder.bind(this);
    }

  addToCart(event) {
     this.state.books.map((item) => {
            if (event.target.id === item.id) {
                const { selectedBooks } = this.state;
                selectedBooks[item.id] = selectedBooks[item.id] + 1 || 1;
                this.setState({
                    selectedBooks: selectedBooks
                })
            }
        })
  }
  addNewOrder(name, email, address) {
    const booksInBasket = Object.keys(this.state.selectedBooks)
      const booksOrderd = booksInBasket.map((key) => {
        const bookTitle = this.state.books[key];
        const count = this.state.selectedBooks[key];
        return bookTitle.name + ":" + count.toString() + " X " + bookTitle.price.toString();
      });
      var newOrder =  this.state.orders;
      newOrder.push({name: name, email: email, address: address, selectedBooks: booksOrderd.join(" , ")});
      this.setState({orders: newOrder, selectedBooks:[]});
  }

  addNewBook(e) {
    var newBooksList = this.state.books;
    var id = newBooksList.length;
    var name = e.target["title"].value;
    var author = e.target["author"].value;
    var price = e.target["price"].value
    newBooksList.push({ id, name, author, price});
    this.setState({books: newBooksList});
  }
  render() {
    const Wrapper = () => {
      return (
        <BooksList booksList={this.state.books} addToCart={this.addToCart}  />
      );
    }

    const WrapperCart = () => {
      return (
        <ShoppingBasket selectedBooks={this.state.selectedBooks} booksList={this.state.books} addNewOrder={this.addNewOrder} />
      );
    }
    const WrapperAdmin = () => {
      return (
        <AdminPage booksList={this.state.books} addNewBook={this.addNewBook}/>
      );
    }
    const WrapperHistory = () => {
      return (
        <History orders={this.state.orders}/>
      );
    }
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/shipping">Cart</Link></li>
                    <li><Link to="/admin">Administration</Link></li>
                    <li><Link to="/history">Orders History</Link></li>

                </ul>
              </div>
            </div>
          </nav>
          {/* Each smaller components */}
          {this.props.children}
          <div>
            <Route path="/" exact={true} component={Wrapper}/>
              <Route path="/home" component={Wrapper}/>
              <Route path="/shipping"  component={WrapperCart}/>
              <Route path="/admin" component={WrapperAdmin} />
              <Route path="/history" component={WrapperHistory} />
          </div>
        </div>
      </Router>
    );
  };
}

export default App