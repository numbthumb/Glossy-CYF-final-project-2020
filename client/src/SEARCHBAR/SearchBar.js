import React,{ useState } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import glossarylogo from "../Carousel/picture/gll.png";
import "./SearchBar.scss";
import { Button } from "react-bootstrap";


const SearchBar = () => {
	const [searchTerm, setSearchTerm]= useState("");
	return (
		<div>
			<div className="search-bar" >
				<div><img
					className="glossary-logo"
					src={glossarylogo}
					alt="glossary-bar"
				/></div>
				<div className="search-container">

					<input type="text" placeholder="Search..."
						onChange={(event) => {
							setSearchTerm(event.target.value);
						}}
					/>
					<Button variant="primary" className="search-button"  >
          			GO
					</Button>{" "}</div>
			</div>
			{MOCK_DATA.filter((val) => {
				if (searchTerm == "") {
					return val;
				} else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
					return val;
				}
			}).map((val,key) => {
				return (
					<div className="user" key={key}>
						<p>{val.name} </p>
					</div>
				);
			})}
		</div>
	);
};

export default SearchBar;