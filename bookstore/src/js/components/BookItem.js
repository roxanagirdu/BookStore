import React, {PropTypes} from 'react';
import styles from '../../css/components/BookItem.css';
const BookItem = ({name, id, author, price})=>{
	return (
        <div className="itemContainer">
            <h3 className={styles.bookName}>
             <span>{name}, {author} </span>
                <span className="price">{price} Euro</span>
            </h3>  
        </div>
    )
}
BookItem.PropTypes ={
    name: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number
}

export default BookItem

