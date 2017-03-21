import React, { PropTypes } from 'react';

import '../../css/components/ItemInBasket.css';

const ItemInBasket = ({name, count, price}) => {
    return (
        <div className="itemBox">
            <span>{name}</span>
            <span>{count} x {price}</span>
        </div>
    )
}

ItemInBasket.propTypes = {
    name: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number
}

export default ItemInBasket;