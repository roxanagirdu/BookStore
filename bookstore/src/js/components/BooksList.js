import React, {PropTypes} from 'react';
import BookItem from './BookItem';
import { Row, Col} from 'react-bootstrap';
import '../../css/components/BookItems.css';


const BooksList =({booksList, addToCart})=> { 
	return (
		<div className="container">
                <div>
                    <div>
                        {booksList.map(({id,name, author, price}) => (
                        	<div key={id}>
                             <Row>
                                <Col xs={ 5 }>
                                    <BookItem
                                        key={id}
                                        id={id}
                                        name={name}
                                        author={author}
                                        price={price}
                                    />
                                </Col>
                                <Col xs={ 1 } sm={ 1 }>
                                    <button id={id} onClick={addToCart} className="btn btn-info addCartBtn">Add to Cart</button>
                                </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
		);
	}
	BooksList.PropTypes = {
		booksList: PropTypes.array,
		addToCart: PropTypes.func
	};


export default BooksList
