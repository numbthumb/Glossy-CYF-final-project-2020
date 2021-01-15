import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div id="communityLinks">
				<ul>
					<label>Our community</label>
					<li>
						<a href="https://codeyourfuture.io/" target="_blank">Website</a>
					</li>
					<li>
						<a href="https://docs.codeyourfuture.io/" target="_blank">
                            Documentation
						</a>
					</li>
					<li>
						<a href="https://github.com/CodeYourFuture"target="_blank">GitHub</a>
					</li>
				</ul>
			</div>

			<div id="socialLinks">
				<ul>
					<label>Social media</label>
					<li>
						<a href="https://www.instagram.com/codeyourfuture_/?hl=en"target="_blank">
                            Instagram
						</a>
					</li>
					<li>
						<a href="https://www.facebook.com/codeyourfuture.io/" target="_blank">
                            Facebook
						</a>
					</li>
					<li>
						<a href="https://twitter.com/CodeYourFuture" target="_blank">Twitter</a>
					</li>
				</ul>
			</div>
			<div className="registration">
                © All rights reserved | Registered charity 1174929 |{" "}
				<a
					href="https://codeyourfuture.io/"
					target="_blank"
					rel="noopener noreferrer"
				>
                    CodeYourFuture
				</a>{" "}
                | 2021 Copyright{" Team Glossy"}
			</div>
		</footer>
	);
};

export default Footer;
