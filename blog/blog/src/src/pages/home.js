import Header from '../components/header';
import React from 'react';
import Container from '@material-ui/core/Container';
import Footer from '../components/footer';
import PostList from '../components/post-list';

const HomePage = () => {

	return(
		<div>
			<Header/>
			<Container>
				<PostList/>
			</Container>
			<Footer/>
		</div>	
	);
};

export default HomePage;