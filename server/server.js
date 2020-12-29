import http from "http";
import { Pool } from "pg";



import app from "./app";

const port = parseInt(process.env.PORT || "3000");




/* const server = http.createServer(app);

server.listen(port);

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	// eslint-disable-next-line no-console
	console.log(`Listening on ${bind}`);
}); */
app.listen(port, function(){
	console.log(`Server is listening on ${port}`)
});

