import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems({ cartItems }) {
	return (
		<Container>
			<Title>Shopping Cart</Title>
			<hr />
			<ItemsContainer>
				{cartItems.map(item => (
					<CartItem id={item.id} item={item.product} />
				))}
			</ItemsContainer>
		</Container>
	);
}

export default CartItems;

const Container = styled.div`
	flex: 0.8;
	padding: 10px;
	margin-right: 18px;
	background-color: #c2d6d6;
	border-radius: 20px;
	background-image: url('https://images.unsplash.com/photo-1546640646-89b557854b23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80 ');
`;

const Title = styled.h1`
	margin-bottom: 8px;
	color: white;
`;
const ItemsContainer = styled.div``;
