import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import MOCK_DATA from "./MOCK_DATA.json";
import glossarylogo from "../Carousel/picture/gll.png";
import "./SearchBar.scss";
import { Button } from "react-bootstrap";
import { getMessage, Terms, getLanguage } from "../service";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [termsFromDb, setTermsFromDb] = useState([]);

  //const [link, setLink] = useState("");
  const handler = (event) => {
    console.log(searchTerm);

    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    async function getLang() {
      const data = await getLanguage();
      setTermsFromDb(data);
    }
    getLang();
  }, []);

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
          <Button variant="primary" className="search-button">
            GO
          </Button>{" "}
        </div>
      </div>

      {termsFromDb
        .filter((val) => {
          if (searchTerm === "") {
            return false;
          }
          return val.term.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .map((val, key) => {
          return (
            <div className="user" key={key}>
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
