import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import MOCK_DATA from "./MOCK_DATA.json";
import glossarylogo from "../Carousel/picture/gll.png";
import "./SearchBar.scss";
import { Button } from "react-bootstrap";
import { getMessage, Terms, getLanguage } from "../service";

const search = (search, list)=>{
	return list.filter((val) => {
		if (search === "") {
			return false;
		}
		return val.term.toLowerCase().includes(search.toLowerCase());
	});
};

const SearchBar = ({ setTerm, termsFromDb }) => {
	const [searchTerm, setSearchTerm] = useState("");




	const handler = (event) => {
		console.log(searchTerm);

		setSearchTerm(event.target.value);
	};


	console.log(termsFromDb);

	return (
		<div>
			<div className="search-bar">
				<div>
					<img
						className="glossary-logo"
						src={glossarylogo}
						alt="glossary-bar"
					/>
				</div>
				<div className="search-container">
					<input
						type="text"
						placeholder="Search..."
						onChange={(event) => {
							setSearchTerm(event.target.value);
						}}
					/>


					{search(searchTerm, termsFromDb).length === 1 && search(searchTerm, termsFromDb).map((result)=>{
						return (
							<Link
								to={`/${result.programming_language}/${result.term}`}
								key={result}
								onClick={() => setTerm(result)}
							>
								<Button
									variant="primary"
									className="search-button"
								>
                                    GO
								</Button>
							</Link>
						);
					}) }
				</div>
			</div>

			{search(searchTerm, termsFromDb).map((val, key) => {
				return (
					<div
						className="user"
						key={key}
						onClick={() => setTerm(val)}
					>
						<Link to={`/${val.programming_language}/${val.term}`}>
							<p>
								{val.programming_language} - {val.term}{" "}
							</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default SearchBar;
