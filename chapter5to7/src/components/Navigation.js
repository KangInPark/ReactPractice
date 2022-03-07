import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css"

function Navigation() {
	return (
		<div className={styles.container}>
			<Link to="/" className={styles.link}>
				<span className={styles.span}>home</span>
			</Link>
			<Link to="/about" className={styles.link}>
				<span className={styles.span}>about</span>
			</Link>
		</div>
	);
}

export default Navigation;
