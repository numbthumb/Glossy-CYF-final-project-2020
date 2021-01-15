import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "react-sidebar";


const SidebarNav = ({ language, setTerm }) => {
	const params=useParams();


	return (
		<div className="sidebar">
			<ul className="SidebarList">

				{language.filter((x)=> x.programming_language.toLowerCase()===params.language.toLowerCase())
					.map((value, key) => {
						return (
							<li
								key={key}
								className={params.term === value.term ? "selected row" : "row" }
								onClick={() => {
									setTerm(value);

								}}
							>
								<Link to={`/${value.programming_language}/${value.term}`}>{value.term}</Link>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default SidebarNav;