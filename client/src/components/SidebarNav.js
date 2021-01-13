import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "react-sidebar";


const SidebarNav = ({ language, setTerm}) => {
const params=useParams(); 

	return (
		<div className="sidebar">
			<ul className="SidebarList">

				{language.filter(x=> x.programming_language===params.language).map((value, key) => {
					return (
						<li
							key={key}
							className="row"
							onClick={() => {
								setTerm(value);

							}}
						>
							<Link>{value.term}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SidebarNav;