import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div id="communityLinks">
				<ul>
					<label>Our community</label>
					<li>
						<a href="https://codeyourfuture.io/">Website</a>
					</li>
					<li>
						<a href="https://docs.codeyourfuture.io/">
                            Documentation
						</a>
					</li>
					<li>
						<a href="https://github.com/CodeYourFuture">GitHub</a>
					</li>
				</ul>
			</div>

			<div id="socialLinks">
				<ul>
					<label>Social media</label>
					<li>
						<a href="https://www.instagram.com/codeyourfuture_/?hl=en">
                            Instagram
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/codeyourfuture.io/">
                            Facebook
						</a>
					</li>
					<li>
						<a href="https://twitter.com/CodeYourFuture">Twitter</a>
					</li>
				</ul>
			</div>
			<div className="registration">
                © All rigths reserved | Registered charity 1174929 |{" "}
				<a
					href="https://codeyourfuture.io/"
					target="_blank"
					rel="noopener noreferrer"
				>
                    CodeYourFuture
				</a>{" "}
                | 2020 Copyright{" "}
			</div>
		</footer>
	);
};

export default Footer;
