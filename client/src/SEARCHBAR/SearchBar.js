import React,{ useState } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import "./SearchBar.scss";


const SearchBar = () => {
	const [searchTerm, setSearchTerm]= useState("");
	return (
		<div>
			<div className="search-bar" >
				<div><img
					className="glossary-logo"
					src="client/src/Carousel/picture/gll.png"
					alt="glossary-bar"
				/></div>
				<div className="search-bar-container">
					<input type="text" placeholder="Search..."
						onChange={(event) => {
							setSearchTerm(event.target.value);
						}}
					/> </div>
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