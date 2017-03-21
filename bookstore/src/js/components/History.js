import React from 'react';
import '../../css/components/History.css';

const History = ({orders}) => {
	const msg = function(message) {
		return (
        <div>
            <h2>{message}</h2>
        </div> );
    };
	return (
	<div>
	<div>
	{orders.length? msg("Orders") : msg("No available orders!")}
	</div>
		{orders.map((order) => (
		<div className="orders">
			<div><strong>Full Name: </strong> {order.name}</div>
			<div><strong>Email: </strong> {order.email}</div>
			<div><strong>Address: </strong> {order.address}</div>
			<div><strong>Ordered Books: </strong> {order.selectedBooks}</div>
		</div> 
		))}
		</div>
		);
}


export default History