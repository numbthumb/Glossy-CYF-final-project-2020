import React,{ useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MOCK_DATA from "./MOCK_DATA.json";
import glossarylogo from "../Carousel/picture/gll.png";
import "./SearchBar.scss";


const SearchBar = () => {


	/* const params = useParams();

	 	 	useEffect(() => {
		fetch(params.term);
	}   */
	const [searchTerm, setSearchTerm]= useState("");

	//const [link, setLink] = useState("");
	const handler = ((event) => {
		console.log(searchTerm);

		setSearchTerm(event.target.value);

	});


	return (
		<div>
			<div className="search-bar" >
				<div><img
					className="glossary-logo"
					src={glossarylogo}
					alt="glossary-bar"
				/></div>
				<div className="search-bar-container">
					<input type="text" placeholder="Search..."
						onChange={handler}
					/> </div>
			</div>
			{MOCK_DATA.filter((val) => {
				if (searchTerm == "") {
					console.log(val);
					return val;
				} else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
					return (
						<div>
							{console.log(searchTerm)};

						</div>
					);
				}
			}).map((val,key) => {
				return (
					<div className="user" key={key}>
						<Link to={`/${val.name}`}>
							<p>{val.name} </p>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default SearchBar;