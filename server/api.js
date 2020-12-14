
import { Router } from "express";

import { Connection } from "./db";

const router = new Router();

router.get("/", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		res.json({ message: "Hello, world!" });
	});
});

//get a specific term along with its definition and links
//for example http://localhost:3100/api/terms/Variable
router.get("/terms/:term", function (req, res) {
    const term = req.params.term;
    Connection.query(
        "SELECT terms.term, terms.definitions, terms.links FROM terms WHERE lower(term)=$1",
        [term.toLowerCase()]
    )
        .then((result) => res.json(result.rows))
        .catch((e) => console.error(e));
});

//Get all the terms for a language for example:  localhost:3100/api/language/?language=Javascript. 
//Also gets all terms if query is left out: http://localhost:3100/api/language

http: router.get("/language", function (req, res) {
    let language = req.query.language;
    let query = "SELECT terms.term FROM terms";
    if (language) {
        query = `SELECT terms.term FROM terms WHERE lower(terms.programming_language) LIKE '%${language.toLowerCase()}%' ORDER BY term`;
    }
    Connection.query(query)
        .then((result) => res.json(result.rows))
        .catch((e) => console.error(e));
});

export default router;
