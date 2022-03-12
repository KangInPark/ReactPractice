import React, { useState, useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import { throttle } from "lodash";

function Topbtn() {
	const [scrolled, setScrolled] = useState(false);
	const onClick = () => {
		document.documentElement.scrollTop = 0;
		setScrolled(false);
	};
	const scrollFunc = throttle(() => {
		const val = window.scrollY;
		val > 30 ? setScrolled(true) : setScrolled(false);
	}, 100);
	useEffect(() => {
		window.addEventListener("scroll", scrollFunc);
		return () => {
			window.removeEventListener("scroll", scrollFunc);
		};
	}, [scrollFunc]);
	return scrolled ? (
		<FiArrowUpCircle
			style={{
				position: "fixed",
				bottom: "1rem",
				right: "1.9rem",
				width: "3vw",
				height: "3vw",
				borderRadius: "100%",
				backgroundColor: "white"
			}}
			onClick={onClick}
		/>
	) : null;
}
export default Topbtn;
