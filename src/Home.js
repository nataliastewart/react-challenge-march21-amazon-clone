import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';

function Home() {
	const [products, setProducts] = useState([]);

	const getProducts = () => {
		db.collection('products').onSnapshot(snapshot => {
			let tempProducts = [];
			tempProducts = snapshot.docs.map(doc => ({
				id: doc.id,
				product: doc.data(),
			}));
			setProducts(tempProducts);
		});
	};

	useEffect(() => {
		console.log('Call products');
		getProducts();
	}, []);

	return (
		<Container>
			<Banner></Banner>
			<WrapProducts>
				<ContentOne>
					{products.slice(0, 2).map(data => (
						<Product
							title={data.product.name}
							price={data.product.price}
							rating={data.product.rating}
							image={data.product.image}
							id={data.id}
						/>
					))}
				</ContentOne>
				<Content>
					{products.slice(2, 5).map(data => (
						<Product
							title={data.product.name}
							price={data.product.price}
							rating={data.product.rating}
							image={data.product.image}
							id={data.id}
						/>
					))}
				</Content>
			</WrapProducts>
		</Container>
	);
}

export default Home;

const Container = styled.div`
	max-width: 100%;
	margin: 0 auto;
`;

const Banner = styled.div`
	background-image: url('https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_NonPrime_Banner/f69c4124-8751-4646-b8de-14e68f14ff8e._UR3000,600_SX1500_FMwebp_.jpg');
	min-height: 250px;
	background-position: center;
	background-size: cover;
	z-index: 1;
	mask-image: linear-gradient(to bottom, rgba(0, 0, 2, 2), rgba(0, 0, 0, 0));
`;
//mask-image: linear-gradient(to bottom, rgba(0, 0, 2, 1), rgba(0, 0, 0, 0));
const Content = styled.div`
	padding-left: 10px;
	padding-right: 10px;
	margin-top: -1px;
	display: flex;
`;

const ContentOne = styled.div`
	padding-left: 10px;
	padding-right: 10px;
    padding: 0px 7px
	margin-top: -1px;
	display: flex;
   
    
`;

const WrapProducts = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 100%;
	background: linear-gradient(to bottom, #ffffff 0%, #0033cc 100%);
`;
