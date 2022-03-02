import React from "react";
import { Container } from "react-bootstrap";
const Header = () => {
	return (
		<Container fluid>
			<h1 className="main-header">Live Spaces</h1>
			<p>
				<i className="fas fa-check-circle p-1"></i>All NFTs on Cyber either
				belong to or were minted by their space creator.
			</p>
		</Container>
	);
};

export default Header;
