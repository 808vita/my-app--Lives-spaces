import { useState, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "./components/Cards";
import Header from "./components/Header";
import HeaderButtons from "./components/HeaderButtons";
import { pageData } from "./pageData";

import "./css/App.css";
import ImgPage from "./pages/ImgPage";

// const dataOnly = pageData[2];
// const showFullImg = { show: true, data: dataOnly };

function App() {
	const scrollFullImg = useRef();

	const [showFull, setShowFull] = useState({
		show: false,
		data: {},
	});
	const [cardsData, setCardsData] = useState(pageData);

	const handleCardData = (flag) => {
		let newInputs = [];

		// setButtonInputs(buttonData);
		if (flag === "trending") {
			newInputs = pageData.filter((data) => data.trending);
		} else if (flag === "latest") {
			newInputs = pageData.filter((data) => data.latest);
		} else if (flag === "popular") {
			newInputs = pageData.filter((data) => data.popular);
		} else if (flag === "genesis") {
			newInputs = pageData.filter((data) => data.genesis);
		} else if (flag === "temple") {
			newInputs = pageData.filter((data) => data.temple);
		} else if (flag === "void") {
			newInputs = pageData.filter((data) => data.void);
		} else if (flag === "bayc") {
			newInputs = pageData.filter((data) => data.bayc);
		} else {
			newInputs = [];
		}

		setCardsData(newInputs);
	};

	const handleImg = (data) => {
		// console.log(data);
		setShowFull({ show: true, data: data });

		scrollFullImg.current.scrollIntoView({ behavior: "smooth" });
	};

	const handleCloseImg = () => {
		setShowFull({ show: false, data: {} });
	};

	return (
		<div className="bodyspacing">
			<Header />
			<HeaderButtons handleCardData={handleCardData} />
			<div className="showFull" ref={scrollFullImg}>
				{showFull.show && (
					<ImgPage {...showFull.data} handleCloseImg={handleCloseImg} />
				)}
			</div>

			{/* {showFullImg.show && <ImgPage {...showFullImg.data} />} */}

			<Container fluid className="body-container">
				<Row md={3} sm={1}>
					{/* <Cards {...dataOnly} /> */}
					{cardsData.map((card) => {
						return <Cards key={card.id} {...card} handleImg={handleImg} />;
					})}
				</Row>
			</Container>
		</div>
	);
}
export default App;
